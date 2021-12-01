import React from 'react';
import platelogo from "./platelogo.png";
import { Link } from "react-router-dom"; 

function Home(){
    return(
        <div className="App container py-2">
        <div class="jumbotron border border-dark">
            <h1 class="display-4">Plate</h1>
                <p class="lead">This is where you find the best food from new restaurants you good too.</p>
            <hr class="my-4"/>
                <p>Cool things happen when you login or signup</p>
                <p class="lead">
                <Link to={'/map'}>
                <img src={platelogo} alt="logo"/>
                </Link>
                {/* <img src="http://res.cloudinary.com/clouduser21/image/upload/v1636410860/y3mnfbvmtyipamd1snlp.png"/> */}
                 </p>
        </div>
        </div>
    );
}

export default Home;