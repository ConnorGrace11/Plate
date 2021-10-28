import React, { useReducer } from 'react';

const Profile = () => {

    //axios.get("http://localhost:3001/api/auth/login"
    function getCurrentUser() {
        const user = JSON.parse(localStorage.getItem('username'));
      }

    const Logout = () => {
        
      }

    return(
        <div>
            <br></br>
            <h2>This is the profile page for <span></span></h2>
            <p>This is your page to view restuarants more in depth</p>
            <br></br>
            <button class="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default Profile;