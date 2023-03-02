import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  const [isSignUp, setSignUp] = useState(true);
  const [data, seData] = useState({firstname: "", lastname: "",username: "", password: "", confirmpass: ""})
  const [confirmPass, setConfirmPass ] = useState(true)
  const handleChange = (e)=> {
    seData({...data, [e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp){
      if(data.password !== data.confirmpass){
        setConfirmPass(false)
      }
    }
  }
  return (
    <div className="auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>We Me</h1>
          <h6>Explore the ideas and thoughts</h6>
        </div>
      </div>
      {/* Right Side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="confirm password"
                onChange={handleChange}
              />
            )}
          </div>
          <span style={{display: confirmPass? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end" , marginRight: "5px"}}>
            Confirm password is not matching with password
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => setSignUp((prev) => !prev)}
            >
              {isSignUp
                ? "Already have an account! Log In."
                : "Already have an account! Sign Up."}
            </span>
          </div>
          <button className="button infoButton">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
