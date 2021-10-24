import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const authAxios = axios.create({
    baseURL: `http://localhost:5000/api/auth/user`,
    headers: {
        Authorization: `Bearer`
    }
})


function Protected(){
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        protect()
    }, [])

    const protect = async () => {
        try {
            const userProfile = await authAxios.get("/admin/protected")
            setUser(userProfile.data)
            setLoading(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div className="all-items">
            <h1>User</h1>
        </div>
        <div className="allmeals">
            {loading && user.map((item) => (
                <div className="meal">
                    <h2>{ item.username }</h2>
                    <h2>{ item.email }</h2> 
                </div>
            ))}      
        </div>
        </>
    )
}

export default Protected;