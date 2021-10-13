import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        // Login(details);
    }

    async function login() {
        await axios('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => console.log(response.data))
            .catch(err => {
                console.error(err)
            }) 

    }
    
// when you change something it pass through the event, calls on the setDetails function
// ? is a condintional operator
// if an error is equal to nothing then it is going to pass the div class
    return (
        <div class="container">
            <br></br> <br></br>
        <div class="row align-items-center">
        <div class="col-md-8 offset-md-2 bg-success border border-3 border-dark">
        <br></br> <br></br>
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                <br></br>
                <div className="form-group row ">
                    <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" name="email" id="email" onChange={e => setDetails(e.target.value)}/>
                </div>
                </div>
                <br></br> 
                <div className="form-group row">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password:</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control " name="password" id="password" onChange={e => setDetails(e.target.value)}/>
                </div>
                </div>
                <br></br> <br></br>
                <input type="submit" value="LOGIN" onClick={login}/>
                <Link to={'/Register'}>
                <button > Register </button>
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