import Logo from "../assests/images/Logo.svg"
import SigInInImg from "../assests/images/SigInInImg.svg"
import Lendsqr from '../assests/images/lendsqr.svg'
import React from 'react'

const Login = () => {
    function showPassword(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        var password : HTMLElement | null = document.getElementById("password-input")
        if(password?.attributes[0].nodeValue === 'password') password?.setAttribute('type','text')
        else password?.setAttribute('type','password')
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
                        <input type="email" id="email-input" placeholder="Email"/>
                        <div className="input-password-container">
                            <input type="password" id="password-input" placeholder="Password"/>
                            <button onClick={showPassword}>show</button>
                        </div>
                        <div className="forgot-password">
                            <p>forgot password?</p>
                        </div>
                        <div className="login-btn-container">
                            <button type="submit" className="login-btn-btn">log in</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Login