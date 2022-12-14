import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const HomePageHeader = props => {
    const queryParams = new URLSearchParams(window.location.search)
    let lang = queryParams.get("l")  
	let urlparams = "?l="+lang

	if(lang === null) {
		urlparams = ''
	}	
    
	let lang_about = 'ABOUT MIRAL'
    const home_url = "/"+urlparams
    const about_url = "/destination-happiness/index.html"+urlparams
    let miral_url = "https://miral.ae/"
    const privacy_url = "/privacy-policy/index.html"+urlparams	
    let lang_switcher = 'العربية'
    let arab_url ="?l=ar"
	let lang_miral_web = "MIRAL WEBSITE"

    if(lang === null || lang!=='ar') {
        urlparams = ""
		miral_url = "https://miral.ae/"
    } else {
		lang_about = 'نبذة عن ميرال'
		lang_switcher = 'ENGLISH'	
		arab_url ="?l=en"		
		miral_url = "https://miral.ae/ar"
		lang_miral_web = "الموقع الالكتروني"	
	}
    

	

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
		        <a class="nav-link " href={about_url}>{lang_about}</a>
		      </li>

			  	<li class="nav-item">
                    <a class="nav-link " target="_blank" href={miral_url}>{lang_miral_web}</a>
            	</li>
		     

		      <li class="nav-item">
		        	<a class="nav-link lang_switcher" href={arab_url}>{lang_switcher}</a>
		      </li>
		     
		    </ul>
		    
		</div>
	</div>
</nav>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default HomePageHeader