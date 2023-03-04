import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";
const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setSignUp] = useState(true);
  console.log(loading)
  const [data, seData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    seData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    seData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };
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
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
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
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="confirm password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            Confirm password is not matching with password
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account! Log In."
                : "Already have an account! Sign Up."}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
