import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

function Protected(){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = cookies.get("access_token")
    
    const authAxios = axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    useEffect(() => {
        protect()
    }, [])

    const protect = async () => {
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")

            // console.log(setToken(Cookies.get("access_token")))
            setUser([userProfile.data])
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
                    <h2>ID: { item.user._id }</h2>
                    <h2>Email: { item.user.email }</h2>
                </div>
            ))}      
        </div>
        </>
    )
}

export default Protected;