import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>We Me</h1>
          <h6>Explore the ideas and thoughts</h6>
        </div>
      </div>
      {/* <LogIn/> */}
      <SignUp />
    </div>
  );
};

function LogIn() {
  return(
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="username"
            name="username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="password"
          />
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Don't have an account Sign Up.</span>
        </div>
        <button className="button infoButton">Login</button>
      </form>
    </div>
  )
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>SignUp</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="username"
            name="username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="confirm password"
          />
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Already have an account! Log In.</span>
        </div>
        <button className="button infoButton">SignUp</button>
      </form>
    </div>
  );
}

export default Auth;
