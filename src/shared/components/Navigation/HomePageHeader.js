import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const HomePageHeader = props => {


    const content  = 
    <div>
    <nav id="navMiral" class="navbar navbar-expand-lg  m_header home_header">
        <div class="container">
            <a class="navbar-brand" href="/"><img class="logo" src="/assets/img/miral-logo.svg" alt="" /></a>



            <div class="ftrd_header">
                <img src="/assets/img/mrl-header-01.webp" />
            </div>




            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link " href="/destination-happiness/index.html">ABOUT</a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link " href="#">CONTACT</a>
                </li>

                <li class="nav-item lang ">
                        <a class="nav-link " href="#">العربية</a>
                </li>
                
                </ul>
                
            </div>
        </div>
    </nav>
    <section class="cstm_sec news_sec">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="/destination-happiness/index.html">Read more</a></p>
			</div>
		</div>
	</div>
    </section>

    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default HomePageHeader