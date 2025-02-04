import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const SurveyForm = () => {
    let [name, SetName] = useState("");
    let [gender, SetGender] = useState("");
    let [nationality, Setnationality] = useState("");
    let [email, SetEmail] = useState("");
    let [mobile, SetMobile] = useState("");
    let [address, SetAddress] = useState("");
    let [message, SetMessage] = useState("");

    const save = () => {
        let url = "http://localhost:2222/survey";
        let details = {
            "name": name,
            "gender": gender,
            "nationality": nationality,
            "email": email,
            "mobile": mobile,
            "address": address,
            "message": message
        }

        let postdata = {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(details)
        }

        if (name == "" || gender == "" || nationality == "" || email == "" || mobile == "" || address == "" || message == "") {
            toast("Invalid Input ......");
        } else {
            fetch(url, postdata)
                .then(response => response.json())
                .then(info => {
                    toast("Customer save successfully");
                    SetName("");
                    SetGender("");
                    Setnationality("");
                    SetEmail("");
                    SetMobile("");
                    SetAddress("");
                    SetMessage("");
                })
        }

    }
    return (
        <div className="container-fluid  survey-container">
            <div className="row justify-content-center">
                <div className="col-xl-3">
                    <ToastContainer />
                </div>
                <div className="col-xl-6 mt-1">
                    <form onSubmit={(e) => { e.preventDefault(); save(); }} className="survey-form">
                        <h2 className="form-title">Survey Form</h2>

                        <div className="form-group animated-input">
                            <input
                                type="text"
                                className="form-control"
                                onChange={obj => SetName(obj.target.value)}
                                value={name}
                                required
                            />
                            <label>Enter Full-Name</label>
                            <span className="underline"></span>
                        </div>

                        <div className="form-group animated-select">
                            <select
                                className="form-control"
                                onChange={obj => SetGender(obj.target.value)}
                                value={gender}
                                required
                            >
                                <option value="">Choose Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-group animated-input">
                            <input type="text" className="form-control" onChange={obj=>Setnationality(obj.target.value)} value={nationality} required/>
                            <label> Nationality </label>
                            <span className="underline"></span>
                        </div>

                        <div  className="form-group animated-input">
                            <input type="email" className="form-control" onChange={obj=>SetEmail(obj.target.value)} value={email} required/>
                            <label> Email-Id </label>
                            <span className="underline"></span>
                        </div>

                        <div  className="form-group animated-input">
                            <input type="number" className="form-control" onChange={obj=>SetMobile(obj.target.value)} value={mobile} required/>
                            <label> Phone Number </label>
                            <span className="underline"></span>
                        </div>

                        <div  className="form-group animated-input">
                            <textarea className="form-control" onChange={obj=>SetAddress(obj.target.value)} value={address} required/>
                            <label> Address </label>
                            <span className="underline"></span>
                        </div>
                        
                        <div  className="form-group animated-input">
                            <textarea className="form-control" onChange={obj=>SetMessage(obj.target.value)} value={message} required/>
                            <label> Message </label>
                            <span className="underline"></span>
                        </div>

                        


                        <div className="form-group text-center">
                            <button className="btn btn-primary submit-btn" type="submit">
                                Save
                                <span className="btn-animation"></span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    );

}
export default SurveyForm;