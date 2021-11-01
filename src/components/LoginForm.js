import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        loginUser();
    }, [])
    

    const submitHandler = e => {
        e.preventDefault();
    }

    const loginUser = async () => {
        await axios.post("http://localhost:5000/api/auth/login", { email: email, password: password})
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
            <form onSubmit={loginUser}>
                <div>
                    <h2>Login</h2>
                    {(error !== "") ? (<div className="error"> {error} </div> ) : ""}
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setEmail({ email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setPassword({ password: e.target.value })}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
                </div>
            </form>
        )
    }

export default LoginForm;