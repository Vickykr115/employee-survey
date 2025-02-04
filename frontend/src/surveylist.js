import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Chatbot from "./chatbot";

const Surveylist = () => {
    let [allsurvey, setSurvey] = useState([]);
    const getlist = () => {
        fetch("http://localhost:2222/survey")
            .then(response => response.json())
            .then(arr => {
                setSurvey(arr);
            })
    }

    useEffect(() => {
        getlist();
    }, [])

    const deletesurvey = async (id) => {
        let url = "http://localhost:2222/survey/" + id;
        let postdata = { "method": "delete" };
        try {
            await fetch(url, postdata)
                .then(response => response.json())
                .then(info => {
                    toast(info.message)
                    getlist();
                })
        } catch (error) {
            toast("Server down");
        }
    }


    return (
        <div className="container-fluid survey-list-container">
            <ToastContainer />
            <div className="row">
                <div className="col-xl-12">
                    <h1 className="list-title">Survey List</h1>
                    <div className="table-wrapper">
                        <table className="table animated-table">
                            <thead>
                                <tr className="table-header">
                                    <th>Sl No.</th>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>Nationality</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Address</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allsurvey.map((sur, index) => (
                                    <tr key={index} className="table-row">
                                        <td>{index + 1}</td>
                                        <td>{sur.name}</td>
                                        <td>{sur.gender}</td>
                                        <td>{sur.nationality}</td>
                                        <td>{sur.email}</td>
                                        <td>{sur.mobile}</td>
                                        <td>{sur.address}</td>
                                        <td>{sur.message}</td>
                                        <td className="action-buttons">
                                            <button 
                                                className='btn btn-danger btn-sm delete-btn'
                                                onClick={() => deletesurvey(sur._id)}
                                            >
                                                Delete
                                                <span className="btn-animation"></span>
                                            </button>
                                            <Link 
                                                className='btn btn-warning btn-sm edit-btn'
                                                to={`/surveyedit/${sur._id}`}
                                            >
                                                Edit
                                                <span className="btn-animation"></span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-xl-4 chatbot-column">

                        <Chatbot />
                </div>
            </div>
        </div>
    )
}

export default Surveylist;