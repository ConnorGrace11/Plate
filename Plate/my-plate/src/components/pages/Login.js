
import React, { useState } from 'react';
import LoginForm from '../LoginForm';
// reference: //https://www.youtube.com/watch?v=91qEdc6dSUs&t=1062s

function Login() {
  
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  


  return (
  <div>
      <div > 
        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            
          </div>
        ): (
       <LoginForm Login={Login} error={error} />
        )}
     </div>
    
</div>
);
}

export default Login;
