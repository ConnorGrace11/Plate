import React from 'react';
import platelogo from "./platelogo.png";

function Home(){
    return(
        <div className="App container py-2">
        <div class="jumbotron border border-dark">
            <h1 class="display-4">Plate</h1>
                <p class="lead">This is where you find food.</p>
            <hr class="my-4"/>
                <p>Cool things happen when you login or signup</p>
                <p class="lead">
            <img src={platelogo} alt="logo"/>
                 </p>
        </div>
        </div>
    );
}

export default Home;