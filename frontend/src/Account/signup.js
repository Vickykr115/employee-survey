import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./signup.css"; // Create this CSS file

const Signup = () => {
   
    let [userinfo, setInfo] = useState({});

    const pickValue = (obj) => {
        userinfo[obj.target.name] = obj.target.value;
        setInfo(userinfo);
    }

    const save = (frmobj) => {
        frmobj.preventDefault();
        let url = "http://localhost:2222/signup";
        let postdata = {
            headers: { 'content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify(userinfo)
        }
        if(userinfo == ""){
            alert("Invalid Input")
        } else {
            fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                toast(userinfo.name + "Register Successfully");
                frmobj.target.reset();
                setInfo( {} );
            })
        }
        
    }


    return (
        <div className="container w-75 mt-4">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <ToastContainer />
                    <div className="auth-wrapper">
                        <div className="auth-header">
                            <div className="auth-image">
                                <img 
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" 
                                    alt="Signup" 
                                    className="animated-image"
                                />
                            </div>
                            <h2 className="auth-title">Create New Account</h2>
                        </div>

                        <form onSubmit={save} className="auth-form">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="form-group animated-input">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            onChange={pickValue} 
                                            required 
                                        />
                                        <label>Full Name</label>
                                        <span className="underline"></span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group animated-input">
                                        <input 
                                            type="number" 
                                            name="mobile" 
                                            onChange={pickValue} 
                                            required 
                                        />
                                        <label>Mobile Number</label>
                                        <span className="underline"></span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group animated-input">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            onChange={pickValue} 
                                            required 
                                        />
                                        <label>Email Address</label>
                                        <span className="underline"></span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group animated-input">
                                        <input 
                                            type="password" 
                                            name="password" 
                                            onChange={pickValue} 
                                            required 
                                        />
                                        <label>Password</label>
                                        <span className="underline"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="auth-actions">
                                <button type="submit" className="auth-button">
                                    Register
                                    <span className="btn-animation"></span>
                                </button>
                                <button type="reset" className="auth-button secondary">
                                    Reset
                                    <span className="btn-animation"></span>
                                </button>
                            </div>

                            <div className="auth-footer">
                                <Link to="/login" className="auth-link">
                                    Already have an account? Login Here
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;