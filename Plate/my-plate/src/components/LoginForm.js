import { Link } from "react-router-dom"; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        loginUser();
    })
    

    const submitHandler = e => {
        e.preventDefault();
    }

    const loginUser = async () => {
        await axios.post("http://localhost:3001/api/auth/login", { email: email, password: password})
            .then(res => {
                console.log(res.data)
                
                return res.headers
            })
            .catch(error => {
                console.log(error.message)
            })
        }
    
// when you change something it pass through the event, calls on the setDetails function
// ? is a condintional operator
// if an error is equal to nothing then it is going to pass the div class
    return (
        <div class="container">
            <br></br> <br></br>
            <div class="row align-items-center">
            <div class="col-md-8 offset-md-2 bg-success border border-3 border-dark rounded">
                <br></br> <br></br>
                <form onSubmit={loginUser, submitHandler}>
                <div>
                <h2>Login</h2>
                <br></br>
                <div className="form-group row justify-content-center">
                        <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-8  ">
                        <input type="email" class="form-control" name="email" id="email" onChange={e => setEmail({ email: e.target.value })}/>
                    </div>
                </div>
                <br></br> 
                <div className="form-group row justify-content-center">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control " name="password" id="password" onChange={e => setPassword({ password: e.target.value })}/>
                    </div>
                </div>
                <br></br> <br></br>
                <input class="btn btn-info" type="submit" value="Login"/>
                <hr></hr>
                <Link to={'/signup'}>
                <button class="btn btn-info" > Sign Up </button>
                </Link>
                
            </div>
            </form>
            <br></br> <br></br>
            </div>
        
            </div>
        </div>
    )
}

export default LoginForm;