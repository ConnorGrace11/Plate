import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc2MWRhM2MyNDE5NjkwMmY3ODJjZTEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhQGEuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM1NzQxNjM0fQ.OcLiJS7inZAoyjq2ADPmkl8Caes_jwZFKbRq9VEj-7H2eQmhsKsHHa9ovvKBCu2fixE25yX49E9Oot63mg1vCg"

const authAxios = axios.create({
    baseURL: `http://localhost:5000`,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

function Protected(){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(token)
    
    useEffect(() => {
        protect()
    }, [])

    const protect = async () => {
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")
            setUser([userProfile.data])
            // setToken()
            setLoading(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div className="all-items">
            <h1>User Details</h1>
        </div>
        <div className="allmeals">
            {loading && user.map((item) => (
                <div className="meal">
                    <h2>User: { item.user.username }</h2>
                    <h5>ID: { item.user._id }</h5>
                    <h5>Email: { item.user.email }</h5> 
                    <h5>token: { item.token }</h5>
                </div>
            ))}      
        </div>
        </>
    )
}

export default Protected;