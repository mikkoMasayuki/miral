import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const HomePageHeader = props => {


    const content  = 
    <div>
<nav class="navbar navbar-expand-lg  m_header nav_single">
	<div class="container">
		<a class="navbar-brand" href="/"><img class="logo" src="/assets/img/mrl-logo.svg" alt="" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		   <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		        <a class="nav-link " href="/destination-happiness/index.html">ABOUT</a>
		      </li>

			  	<li class="nav-item">
                    <a class="nav-link " target="_blank" href="https://miral.ae/">MIRAL.AE</a>
            	</li>
		     

		      <li class="nav-item lang ">
		        	<a class="nav-link " href="#">العربية</a>
		      </li>
		     
		    </ul>
		    
		</div>
	</div>
</nav>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default HomePageHeader