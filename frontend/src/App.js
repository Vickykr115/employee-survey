import { HashRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

import Chatbot from "./chatbot";
import Surveylist from "./surveylist";
import SurveyForm from "./surveyform";
import EditSurvey from "./surveyedit";

function App() {
  return (

    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark " style={{backgroundColor:"#6f42c1"}}>
        <div className="container">
          <a className="navbar-brand" > Employee Survey </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">

              <li className="nav-item me-4">
                <Link className="nav-link  active" to="/surveyform"> Survey Form </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link  active" to="/surveylist"> Survey List </Link>
              </li>

            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end " id="mynavbar">
            <ul className="navbar-nav">
              <li className="nav-item justify-content-end">
                <Link className="nav-link justify-content-end active" onClick={logout} > Welcome : {localStorage.getItem("name")} - Logout </Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
      <Routes>
        <Route exact path='/chat' element={<Chatbot />} />
        <Route exact path='/surveyform' element={<SurveyForm />} />
        <Route exact path='/surveylist' element={<Surveylist />} />
        <Route exact path='/surveyedit/:myid' element={<EditSurvey />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

const logout = () => {
  localStorage.clear();
  window.location.href = "#/login";
  window.location.reload();
}
