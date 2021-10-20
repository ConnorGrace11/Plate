import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 

const register = async () => {
  await axios.post("http://localhost:3001/api/auth/signup")
}

function Register() {
    return(
    <div class="container">  
      <br></br><br></br>
      <div class="row align-items-center">
        <div class="col-md-8 offset-md-2 bg-warning border border-3 border-dark rounded">
          <br></br> <br></br>
          <form>
            <div>
              <h2>Sign Up</h2>
              <br></br>
              <div className="form-group row justify-content-center">
                <label for="inputEmail4" class="col-sm-2 col-form-label">Email:</label>
                <div className="col-md-6">
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
              </div>
              <br></br>
              <div className="form-group row justify-content-center">
                <label for="username1" class="col-sm-2 col-form-label">Username:</label>
                <div className="col-md-6">
                  <input type="username" class="form-control" id="username1"/>
                </div>
              </div>
              <br></br>
              <div class="form-group row justify-content-center">
                <label for="inputPassword4" class="col-sm-2 col-form-label">Password:</label>
                <div class="col-md-6">
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <br></br>
              <button type="submit" class="btn btn-success">Sign Up</button>
              
            </div>
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

export default Register;