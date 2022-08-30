import React from "react";
import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const MainHeader = props => {

    // return <header>

    //     {props.children}

    // </header>;
    const content  = 
    <div className="container">

        <Link className="navbar-brand" to={'/projects'}>
        <img className="logo" src="/assets/img/logo-miral.svg" alt="" />PORTFOLIO
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" ><i className="lnr lnr-menu"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <form>
                    <input type="search" placeholder="Search" name="" />
                </form>
            </li>

            <li className="nav-item nav_about">
                <a className="nav-link " href="/destination-happiness/index.html">About</a>
            </li>

            <li className="nav-item prof_icon">
                <a className="nav-link "><img src="/assets/img/profile-icon.svg" /></a>
            </li>
            
            </ul>
            
        </div>
    </div>

    return ReactDOM.createPortal(content, document.getElementById('navMiral'))

}


export default MainHeader