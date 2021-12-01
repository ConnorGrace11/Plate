import { Link, Route, Redirect } from "react-router-dom"; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
// reference: //https://www.youtube.com/watch?v=91qEdc6dSUs&t=1062s
// reference: https://www.youtube.com/watch?v=9KaMsGSxGno

const LoginForm = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [loggedIn, setLoggedIn] = useState(false);
    const [showing, setShowing] = useState(false);
    const [status, setStatus] = useState('');

   // useEffect(() => {
     //   loginUser();
    //})

    //const token = `Bearer ${localStorage.getItem('jwt')}`;
    const cookies = new Cookies();

    const handleChange = (e) => {
        const creds = {...loginDetails}
        creds[e.target.name] = e.target.value
        setLoginDetails(creds)
        console.log(creds)
    }
    

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://143.198.25.164:5000/api/auth/login", { 
            email: loginDetails.email,
            password: loginDetails.password
        }/* ,{
            headers: { Authorization: token }
        } */)
        .then(response => {
            const { token } = response.data;
            cookies.set('access_token', token, { path: '/'});
            console.log(response.data)
            setLoggedIn(true)
            setShowing(true)
            window.location.reload(false);
        })
        .catch(error => {
            console.log(error.response.data)
            setLoggedIn(false)
            setShowing(true)
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
                <form onSubmit={submitHandler}>
                <div>
                <h2>Login</h2>
                <br></br>
                <div className="form-group row justify-content-center">
                        <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-8  ">
                        <input type="email" class="form-control" name="email" id="email" onChange={(e) => handleChange(e)}/>
                    </div>
                </div>
                <br></br> 
                <div className="form-group row justify-content-center">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password:</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control " name="password" id="password" onChange={(e) => handleChange(e)}/>
                    </div>
                </div>
                <br></br> <br></br>
                <input class="btn btn-info" type="submit" value="Login"/>
                <hr></hr>
                <Link to={'/signup'}>
                <button class="btn btn-info" > Sign Up </button>
                </Link>
                
            </div>
            {showing ? <div> {loggedIn ? <div><Route><Redirect to="/profile" /* /:id  *//>Successful Login</Route></div> : <div>email or password is incorrect</div>} </div> :
                <div></div> }
            </form>
            <br></br> <br></br>
            </div>
        
            </div>
        </div>
    )
}

export default LoginForm;