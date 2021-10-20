import logo from './logo.svg';
import "./App.css"
//import React, { useState } from 'react';
//import LoginForm from './components/LoginForm';
//import Navbar from "./components/Navbar"
//import 'bootstrap/dist/css/bootstrap.min.css';

//function App() {
 // const adminUser = {
  //  email: "admin@admin.com",
 //   password: "admin123"
//  }

 // const [user, setUser] = useState({name: "", email: ""});
//  const [error, setError] = useState("");
  
//  const Login = details => {
//    console.log(details);

 //   if (details.email == adminUser.email && details.password == adminUser.password){
 //     console.log("Logged in");
 //     setUser({
 //       name: details.name,
  //      email: details.email
 //     });
 //   } else {
//      console.log("Details do not match!");
 //   } 
//  }

 // const Logout = () => {
  //  console.log("Logout");
  //}

//  return (
  //  <div>
  //<nav class="navbar navbar-light bg-light">
    //  <div class="container-fluid">
   //   <a class="navbar-brand">Navbar</a>
    //  <form class="d-flex">
   //   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //  <button class="btn btn-outline-success" type="submit">Search</button>
    //  </form>
    //  </div>
    //  </nav>
    //  <div > 
    //    {(user.email != "") ? (
    //      <div className="welcome">
    //        <h2>Welcome, <span>{user.name}</span></h2>
    //        <button>Logout</button>
    //      </div>
    //    ): (
    //      <LoginForm Login={Login} error={error} />
    //    )}
    //  </div>
    
//</div>
 // );
//};
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
//import Navbar from "./components/Navbar"
import Navbar from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
    } 
  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  return (
  <div>
    <div>
  <nav class="navbar navbar-dark bg-dark" >
      <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
    </div>
      <div > 
        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ): (
       <LoginForm Login={Login} error={error} />
        )}
     </div>
    
</div>
);
};
//import React from 'react';
//import './App.css';
//import Form from './components/Form';

//function App() {
 // return <Form />;
//}

export default App;
