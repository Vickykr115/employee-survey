import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./login.css"; // Create this CSS file

const Login = () => {
   
    let [message, setMessage] = useState("");

    let [userinfo, setInfo] = useState({});

    const pickValue = (obj) => {
        userinfo[obj.target.name] = obj.target.value;
        setInfo(userinfo);
    }

    const loginCheck = (frmobj) => {
        frmobj.preventDefault();
        let url = "http://localhost:2222/signup/login";
        let postdata = {
            headers: { 'content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify(userinfo)
        }
        if(userinfo.myemail == "" || userinfo.mypassword == ""){
            toast("Invalid Input");
        } else {
            fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                if(info==null){
                    toast("Login Fail")
                } else {
                    console.log(info);
                    localStorage.setItem("id", info._id);
                    localStorage.setItem("name", info.name);
                    window.location.href="#/"; //redirect to main url
                    window.location.reload();
                }
            })
        }
        
    }

    return (
        <div className="login-container">
            <div className="row justify-content-center">
                <div className=" col-xl-12 ">
                    <ToastContainer />
                    <div className="auth-wrapper">
                        <div className="auth-header">
                            <div className="auth-image">
                                <img 
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" 
                                    alt="Login" 
                                    className="animated-image"
                                />
                            </div>
                            <h2 className="auth-title">Welcome Back!</h2>
                        </div>

                        <form onSubmit={loginCheck} className="auth-form">
                            <div className="form-group animated-input">
                                <input 
                                    type="email" 
                                    name="myemail" 
                                    onChange={pickValue} 
                                    required 
                                />
                                <label>Email Address</label>
                                <span className="underline"></span>
                            </div>

                            <div className="form-group animated-input">
                                <input 
                                    type="password" 
                                    name="mypassword" 
                                    onChange={pickValue} 
                                    required 
                                />
                                <label>Password</label>
                                <span className="underline"></span>
                            </div>

                            <button className="auth-button">
                                Login
                                <span className="btn-animation"></span>
                            </button>

                            <div className="auth-footer">
                                <Link to="/signup" className="auth-link">
                                    New User? Create Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;