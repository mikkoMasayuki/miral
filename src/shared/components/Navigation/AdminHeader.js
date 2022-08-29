import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const AdminHeader = props => {


    const content  = 
    <div>
<nav class="navbar navbar-expand-lg  m_header m_header_alt">
	<div class="container">
		<a class="navbar-brand" href="/"><img class="logo" src="/assets/img/miral-logo-cms-inside.svg" alt="" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		   <ul class="navbar-nav ml-auto">
		      

			    <li class="nav-item nav_about">
			       	<a class="nav-link " href="admin-login.html">Sign out</a>
			    </li>
		     
		    </ul>
		    
		</div>
	</div>
</nav>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default AdminHeader