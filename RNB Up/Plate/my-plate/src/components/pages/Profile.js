import React from 'react';

const Profile = () => {

    const Logout = () => {
        
      }

    return(
        <div>
            <br></br>
            <h2>This is the profile page for <span>{}</span></h2>
            <br></br>
            <button class="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default Profile;