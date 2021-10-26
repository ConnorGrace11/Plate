import React, { useState } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
// import Cookies from 'universal-cookie'
// const cookies = new Cookies()
// reference: https://www.youtube.com/watch?v=9KaMsGSxGno

const LoginForm = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [loggedIn, setLoggedIn] = useState(false);
    const [showing, setShowing] = useState(false);
    // const [token, setToken] = useState("")

    // const authAxios = axios.create({
    //     baseURL: `http://localhost:5000`,
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })

    const handleChange = (e) => {
        const creds = {...loginDetails}
        creds[e.target.name] = e.target.value
        setLoginDetails(creds)
        console.log(creds)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/auth/login", { 
            email: loginDetails.email,
            password: loginDetails.password
        })
        .then(response => {
            console.log(response.data)
            setLoggedIn(true)
            setShowing(true)
            // setToken(response.data)
        })
        .catch(error => {
            console.log(error.response.data)
            setLoggedIn(false)
            setShowing(true)
        })
    }
    
        return (
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">email: </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="email" 
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="password" 
                            onChange={(e) => handleChange(e)}/>
                    </div>
                        <button type="submit" value="LOGIN"> Login </button>          
                </div>
                {showing ? <div> {loggedIn ? <div><Route><Redirect to="/" />Successful Login</Route></div> : <div>email or password is incorrect</div>} </div> :
                <div></div> }
                
            </form>
        )
    }

export default LoginForm;