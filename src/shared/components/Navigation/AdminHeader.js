import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"
import Swal from 'sweetalert2'

const AdminHeader = props => {

	const logedin = localStorage.getItem('is_login')
	console.log("is_login :"+logedin)
	if (typeof logedin === 'undefined' || logedin === null || logedin==0) {
		window.location.replace('/admin/login')
	}	

	function getWithExpiry(key) {
		const itemStr = localStorage.getItem(key)

		// if the item doesn't exist, return null
		if (!itemStr) {
			return null
		}

		const item = JSON.parse(itemStr)
		const now = new Date()

		console.log(item)
		console.log("expires :"+item.expiry)
		console.log("current :"+now.getTime())
		// compare the expiry time of the item with the current time
			let minsbeforeexpire = item.expiry

		//if (now.getTime() > minsbeforeexpire ) {
		if (now > minsbeforeexpire ) {
			localStorage.removeItem(key)
			return 'expired'
		} else {
			return 'valid'
		}
		
	}	

	function setWithExpiry(key, value, mins) {
		const now = new Date()
		let minutesToAdd=mins;
		let currentDate = new Date();
		let futureDate = currentDate.getTime() + minutesToAdd*60000
	
		const item = {
		  value: value,
		  created: currentDate,
		  expiry: futureDate,
		}
		localStorage.setItem(key, JSON.stringify(item))
	  }	


	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	  })

	const openWarningMsg =  (msg) => {
		  swalWithBootstrapButtons.fire({
			title: `Warning`,
			text: msg,
			icon: 'warning',
			showCancelButton: false,
			confirmButtonText: `Ok`
		  }).then((result) => {
			if (result.isConfirmed) {
				window.setTimeout(function () { 

				}, 500) 				
			}
		   }
		  )   
		
		
	}	

	let value = getWithExpiry("timer_set")
	let value_final = getWithExpiry("timer_set_final")

	if (value === 'expired') {
		setWithExpiry('timer_set_final', 'timertimeout', 1)
		openWarningMsg('One minute left! You will be logout')
	}

	if (value_final === 'expired') {
		localStorage.removeItem('is_login');
		window.location.replace('/admin/login')
	}

	

    const content  = 
    <div>
<nav class="navbar navbar-expand-lg  m_header m_header_alt">
	<div class="container">
		<a class="navbar-brand" href="/admin/projects"><img class="logo" src="/assets/img/miral-logo-cms-inside.svg" alt="" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		   <ul class="navbar-nav ml-auto">
		      

			    <li class="nav-item nav_about">
			       	<a class="nav-link " href="/admin/login">Sign out</a>
			    </li>
		     
		    </ul>
		    
		</div>
	</div>
</nav>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default AdminHeader