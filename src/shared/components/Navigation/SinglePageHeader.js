import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const HomePageHeader = props => {
    const queryParams = new URLSearchParams(window.location.search)
    const lang = queryParams.get("l")    

    let urlparams = "?l="+lang

    if(lang === null) {
        urlparams = ""
    }
    
    const home_url = "/"+urlparams
    const about_url = "/destination-happiness/index.html"+urlparams
    const miral_url = "https://miral.ae/"+urlparams
    const privacy_url = "/privacy-policy/index.html"+urlparams	
    const arab_url ="#"+urlparams

    const content  = 
    <div>
<nav class="navbar navbar-expand-lg  m_header nav_single">
	<div class="container">
		<a class="navbar-brand" href={home_url}><img class="logo" src="/assets/img/mrl-logo.svg" alt="" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		   <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		        <a class="nav-link " href={about_url}>ABOUT</a>
		      </li>

			  	<li class="nav-item">
                    <a class="nav-link " target="_blank" href={miral_url}>MIRAL.AE</a>
            	</li>
		     

		      <li class="nav-item lang ">
		        	<a class="nav-link " href={arab_url}>العربية</a>
		      </li>
		     
		    </ul>
		    
		</div>
	</div>
</nav>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default HomePageHeader