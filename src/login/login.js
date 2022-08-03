import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);

    const content = <React.Fragment>
        <section className="cstm_sec login_sec">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="box">
                            <div className="logo">
                                <span><img src="/assets/img/logo-miral.svg" /> PORTFOLIO</span>
                            </div>

                            <form>
                                <input type="email" placeholder="Email" name=""/>
                                <input type="text" placeholder="Password" name=""/>
                                

                                <Link to="/" className="sub_mit">Sign in</Link>

                                <a href="#">Forgot password</a>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className="ftrd" src="/assets/img/login-ftrd.png" />
                    </div>

                </div>
            </div>
        </section>

  </React.Fragment>

    return content
}

export default Login;