import { Link } from "react-router-dom";

const Service = () =>{
 return(
    <div className="container mt-5">
        <div className="row">               
            <div className="col-xl-6 text-center">
                <Link to="/web"> Web Developement </Link>
            </div>
            <div className="col-xl-6 text-center">
                <Link to="/app"> App Developement </Link>
            </div>
        </div>
    </div>
 )
}

export default Service;