import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router';
import './Form.css';

const FormSignup = () => {

  const [signupDetails, setSignupDetails] = useState({ username: "", email: "", password: "" });
  const [registered, setRegistered] = useState(false);
  const [showing, setShowing] = useState(false);

  const handleChange = (e) => {
      const creds = {...signupDetails}
      creds[e.target.name] = e.target.value
      setSignupDetails(creds)
      console.log(creds)
  }

  const submitHandler = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/signup", { 
          username: signupDetails.username,
          email: signupDetails.email,
          password: signupDetails.password
      })
      .then(response => {
          console.log(response.data)
          setRegistered(true)
          setShowing(true)
      })
      .catch(error => {
          console.log(error.response.data)
          setRegistered(false)
          setShowing(true)
      })
    
  }

  return (
    <>
      <form onSubmit={submitHandler}>
                <div>
                    <h2>Signup</h2>
                    <div className="form-group">
                        <label htmlFor="username">username: </label>
                        <input 
                            type="username" 
                            name="username" 
                            id="username" 
                            placeholder="username" 
                            onChange={(e) => handleChange(e)} />
                    </div>
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
                        <button type="submit" value="LOGIN"> Signup </button>          
                </div>
                {showing ? <div> {registered ? <div>Successful Registration</div> : <div>an error occured</div>} </div> :
                <div></div> }
                
            </form>
    </>
  )
  
}

export default FormSignup;