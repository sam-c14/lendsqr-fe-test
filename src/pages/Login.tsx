import SigInInImg from "../assests/images/SigInInImg.svg";
import Logo from "../assests/images/Logo.svg";
import Lendsqr from "../assests/images/lendsqr.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Login = () => {
  function showPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    var password: HTMLElement | null =
      document.getElementById("password-input");
    if (password?.attributes[0].nodeValue === "password")
      password?.setAttribute("type", "text");
    else password?.setAttribute("type", "password");
  }

  const navigate = useNavigate();

  function submitForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const email = document.getElementById("email-input") as HTMLInputElement;
    const password = document.getElementById(
      "password-input"
    ) as HTMLInputElement;
    if (email.value.trim() !== "" && password.value.trim() !== "") {
      navigate("/users");
    } else {
      const errMsg = document.getElementById("err-msg") as HTMLDivElement;
      errMsg.style.display = "block";
      setTimeout(() => {
        errMsg.style.display = "none";
      }, 1500);
    }
  }
  return (
    <div className="login-container">
      <div className="login-banner">
        <div className="login-banner-logo">
          <img src={Logo} alt="logo" />
          <img src={Lendsqr} alt="logo" />
        </div>
        <div className="login-banner-img">
          <div className="login-banner-img-container">
            <img src={SigInInImg} alt="logo" />
          </div>
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-form-container-content">
          <header>
            <h1>welcome!</h1>
            <p>Enter details to login</p>
          </header>
          <main>
            <form action="">
              <input
                type="email"
                id="email-input"
                autoComplete="off"
                placeholder="Email"
              />
              <div className="input-password-container">
                <input
                  type="password"
                  id="password-input"
                  placeholder="Password"
                />
                <button onClick={showPassword}>show</button>
              </div>
              <div className="forgot-password">
                <p>forgot password?</p>
              </div>
              <div id="err-msg">
                <p>Enter some value for the email and password!!!</p>
              </div>
              <div className="login-btn-container">
                <button
                  onClick={(e) => submitForm(e)}
                  type="submit"
                  className="login-btn-btn"
                >
                  log in
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
