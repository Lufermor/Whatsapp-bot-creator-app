import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser(){

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://127.0.0.1:5000/userdetails/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://127.0.0.1:5000/userupdate/${id}`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });
    }

    return (
        <div>
            <div className="container h-" >
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1>Edit user</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" onChange={handleChange} value={inputs.name} />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email" onChange={handleChange} value={inputs.email} />
                            </div>
                            <button type = "submit" className="btn btn-primary" name="update">Save</button>
                        </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}