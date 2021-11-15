import React, { useReducer } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';

const Profile = () => {

    //axios.get("http://localhost:3001/api/auth/user/:id"),
    function getCurrentUser() {
        
      }

      const user = JSON.parse(localStorage.getItem('username'));
      const token = `Bearer ${localStorage.getItem('jwt')}`;
    const Logout = () => {
        
      }

      const { id } = useParams();

    return(
        <div>
            <br></br>
            <h2>This is the profile page for </h2>
            <p>This is your page to view restuarants</p>
            <p></p>
            <br></br>
            <button class="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default Profile;