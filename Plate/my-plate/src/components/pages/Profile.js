import React, { useReducer, useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const Profile = () => {

    //axios.get("http://localhost:3001/api/auth/user/:id"),
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = cookies.get("access_token")
    
    const authAxios = axios.create({
        baseURL: "http://143.198.25.164:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    useEffect(() => {
        protect()
    }, [])

      //const user = JSON.parse(localStorage.getItem('username'));
      //const token = `Bearer ${localStorage.getItem('jwt')}`;
      //console.log(token)
      const logout = () => {
        var token = cookies.get("access_token")
        cookies.remove("access_token", token, { path: '/' })
        //localCookies.clear();
        window.location.href = '/';
      }

      const protect = async () => {
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")

            //console.log(setToken(Cookies.get("access_token")))
            setUser([userProfile.data])
            setLoading(true)

        } catch (error) {
            console.log(error.message)
        }
    }

     // const { id } = useParams();

    return(
      <>
      <div className="all-items">
          <h1>User Details</h1>
      </div>
      <div className="allmeals">
          {loading && user.map((item) => (
              <div className="meal">
                  <h2>User: { item.user.username }</h2>
                  <h2>Email: { item.user.email }</h2>
                  <h2>Role: {item.user.role}</h2>
                  
              </div>
          ))}      
      </div>
     <button class="btn btn-success" onClick={logout}><Redirect to="/profile"/>Logout</button>
     <br></br>
     <div className="all-items">
          <h1>Favorite Restaurants</h1>
      </div>
     <br></br>
      </>
    );
}

export default Profile;