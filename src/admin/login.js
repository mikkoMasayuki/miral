import React, { Component } from "react";
import { useLocation } from 'react-router-dom';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "admin@admin.com" &&
      e.target.password.value === "123456"
    ) {
      //alert("Successfully logged in");
        let tmp_url = window.location.href;
        const url_arr = tmp_url.split("/");
 
        window.location.href = window.location.protocol + "//" + url_arr[2]+"/admin/projects";
      //e.target.email.value = "";
      //e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Wrong email or password combination");
  };

  render() {
    return (
<section class="cstm_sec login_sec">
	<div class="container">
		<div class="row">

			<div class="col-md-6">
				<div class="box">
					<div class="logo">
						<span><img src="/assets/img/miral-logo-cms.svg" /></span>
					</div>

          <form className="form" onSubmit={this.handleSubmit} >
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
}

export default Login;
