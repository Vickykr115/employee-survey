import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./login";
import Signup from "./signup";

const AccountModule = () => {
    return (

        <HashRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" > Employee Survey </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="mynavbar">
                        <ul className="navbar-nav">

                            <li className="nav-item mx-4 float-end">
                                <Link className="nav-link btn btn-primary float-end active" to="/login">Login</Link>
                            </li>

                            <li className="nav-item me-4 float-end">
                                <Link className="nav-link btn btn-success active" to="/signup"> Create Account </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route exact={true} path="*" element={<Login />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AccountModule;
