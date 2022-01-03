import axios from 'axios';
import Cookies from 'universal-cookie';
import { useState } from 'react'
import './Profile.css'
const cookies = new Cookies();

const PatchUser = () =>{
    const [loginDetails, setLoginDetails] = useState({ username: "" });

    const token = cookies.get("access_token")
    const authAxios = axios.create({
        baseURL: "http://localhost:5000",
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })

    const handleChange = (e) => {
        const creds = {...loginDetails}
        creds[e.target.name] = e.target.value
        setLoginDetails(creds)
        console.log(creds)
    }

    const PatchAccount = async (e) => {
        //e.preventDefault();
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")

            let username = userProfile.data.user.username
            await authAxios.patch(`/api/auth/user/${username}`, {
                username: loginDetails.username
            })
            alert("username changed to " + loginDetails.username)
            window.location.href = '/profile';
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="patch-input" onSubmit={PatchAccount}>
                <input type="text" className="form-control" name="username" id="username" onChange={(e) => handleChange(e)}/>
            </form>
            <button className="btn btn-success" onClick={PatchAccount}>Change username</button>
        </>
    )
}

export default PatchUser;