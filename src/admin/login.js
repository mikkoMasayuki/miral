import React, { Component } from "react";
import { useLocation } from 'react-router-dom';



  const Login = props => {

  localStorage.removeItem('is_login');

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
  

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.email.value)

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (e.target.email.value === "admin@admin.com" &&e.target.password.value === "123456") {

        let tmp_url = window.location.href
        const url_arr = tmp_url.split("/")
        localStorage.setItem('is_login', 1)

        setWithExpiry('timer_set', 'timertimeout', 2)        
        window.location.href = window.location.protocol + "//" + url_arr[2]+"/admin/projects";
    } else {
      alert("Wrong email or password combination");
    }
  }

  const handleClick = e => {
    e.preventDefault()
    alert("Wrong email or password combination");
  }

    return (
<section class="cstm_sec login_sec">
	<div class="container">
		<div class="row">

			<div class="col-md-6">
				<div class="box">
					<div class="logo">
						<span><img src="/assets/img/miral-logo-cms.svg" /></span>
					</div>

          <form className="form" onSubmit={handleSubmit} >
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button class="sub_mit" type='submit'>Sign in</button>

					</form>
				</div>
			</div>

		</div>
	</div>
</section>


    );

}

export default Login;
