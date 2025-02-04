import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from 'react-router-dom';


const EditSurvey = () => {
    let { myid } = useParams();
    let [name, SetName] = useState("");
    let [gender, SetGender] = useState("");
    let [nationality, Setnationality] = useState("");
    let [email, SetEmail] = useState("");
    let [mobile, SetMobile] = useState("");
    let [address, SetAddress] = useState("");
    let [message, SetMessage] = useState("");

    const getdetails = () => {
        let url = "http://localhost:2222/survey/" + myid;
        fetch(url)
            .then(response => response.json())
            .then(info => {
                SetName(info.name);
                SetGender(info.gender);
                Setnationality(info.nationality);
                SetEmail(info.email);
                SetMobile(info.mobile);
                SetAddress(info.address);
                SetMessage(info.message);
            })
    }

    const save = () => {
        let url = "http://localhost:2222/survey";
        let details = {
            "name":name,
            "gender":gender,
            "nationality":nationality,
            "email":email,
            "mobile":mobile,
            "address":address,
            "message":message,
            "id":myid
        }

        let postdata = {
            headers:{"Content-Type":"application/json"},
            method:"put",
            body:JSON.stringify(details)
        }

        if(name == "" || gender == "" || nationality == "" || email == "" || mobile == "" || address == "" || message == ""){
            toast("Invalid Input ......");
        }else{
            fetch(url, postdata)
            .then(response=>response.json())
            .then(info=>{
                toast(info.message);
                window.location.href="/#/";
            })
        }
    }

    useEffect(()=>{
        getdetails();
    }, [])
    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="col-xl-3">
                
                </div>
                <div className="col-xl-6">
                    <form onSubmit={save}>
                        <h2> Edit Details </h2>
                        <div className="mt-2">
                            <label> Enter Full-Name </label>
                            <input type="text" className="form-control" onChange={obj=>SetName(obj.target.value)} value={name} />
                        </div>

                        <div>
                            <label> Gender </label>
                            <select className="form-control" onChange={obj=>SetGender(obj.target.value)} value={gender}>
                                <option> Choose Gender </option>
                                <option> Male </option>
                                <option> Female </option>
                                <option> Other </option>
                            </select>
                        </div>

                        <div>
                            <label> Nationality </label>
                            <input type="text" className="form-control" onChange={obj=>Setnationality(obj.target.value)} value={nationality} />
                        </div>

                        <div>
                            <label> Email-Id </label>
                            <input type="email" className="form-control" onChange={obj=>SetEmail(obj.target.value)} value={email} />
                        </div>

                        <div>
                            <label> Phone Number </label>
                            <input type="number" className="form-control" onChange={obj=>SetMobile(obj.target.value)} value={mobile} />
                        </div>

                        <div>
                            <label> Address </label>
                            <textarea className="form-control" onChange={obj=>SetAddress(obj.target.value)} value={address} />
                        </div>
                        
                        <div>
                            <label> Message </label>
                            <textarea className="form-control" onChange={obj=>SetMessage(obj.target.value)} value={message} />
                        </div>

                        <div>
                            <button className="btn btn-primary ms-5" > Update </button>
                        </div>

                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    )
}

export default EditSurvey;