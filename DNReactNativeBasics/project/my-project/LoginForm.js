//https://www.youtube.com/watch?v=91qEdc6dSUs&t=1062s
import React, { useState } from 'react';
import Footer from './Footer';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
// when you change something it pass through the event, calls on the setDetails function
// ? is a condintional operator
// if an error is equal to nothing then it is going to pass the div class
    return (
        <div class="container-fluid bg-success">
        <form onSubmit={submitHandler}>
            <div class="row text-center">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
        <Footer/>
        </div>
    )
}

export default LoginForm;