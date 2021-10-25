import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Link, Redirect, Route } from "react-router-dom"; 

//const register = async () => {
  //await axios.post("http://localhost:3001/api/auth/signup")
//}
function Signup() {
//const [signupDetails, setSignupDetails] = useState({ username: "", email: "", password: "" });
const [registered, setRegistered] = useState(false);
const [showing, setShowing] = useState(false);
const [usernameReg, setUsernameReg] = useState("");
const [emailReg, setEmailReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");

/**const handleChange = (e) => {
    const creds = {...signupDetails}
    creds[e.target.name] = e.target.value
    setSignupDetails(creds)
    console.log(creds)
}*/

const submitHandler = (e) => {
  e.preventDefault()
  axios.post("http://localhost:3001/api/auth/signup", { 
      username: usernameReg,
      email: emailReg,
      password: passwordReg
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


    return(
    <div class="container">  
      <br></br><br></br>
      <div class="row align-items-center">
        <div class="col-md-8 offset-md-2 bg-warning border border-3 border-dark rounded">
          <br></br> <br></br>
          <form onSubmit={submitHandler}>
            <div>
              <h2>Sign Up</h2>
              <br></br>
              <div className="form-group row justify-content-center">
                <label for="inputEmail4" class="col-sm-2 col-form-label">Email:</label>
                <div className="col-md-6">
                  <input type="email" class="form-control" id="email" onChange={(e) => { setEmailReg(e.target.value);}}/>
                </div>
              </div>
              <br></br>
              <div className="form-group row justify-content-center">
                <label for="username1" class="col-sm-2 col-form-label">Username:</label>
                <div className="col-md-6">
                  <input type="username" class="form-control" id="username" onChange={(e) => { setUsernameReg(e.target.value);}}/>
                </div>
              </div>
              <br></br>
              <div class="form-group row justify-content-center">
                <label for="inputPassword4" class="col-sm-2 col-form-label">Password:</label>
                <div class="col-md-6">
                  <input type="password" class="form-control" id="password" onChange={(e) => { setPasswordReg(e.target.value);}}/>
                </div>
              </div>
              <br></br>
              <button type="submit" class="btn btn-success">Sign Up</button>
              
            </div>
            {showing ? <div> {registered ? <div>Successful Registration</div> : <div>an error occured</div>} </div> :
                <div></div> }
            <br></br>
              <span className='form-input-login'>
                Already have an account? Login <Link to={'/login'}>here</Link>
              </span>
          </form>
          <br></br> <br></br>
        </div>
      </div>
    </div>
    );
}

export default Signup;