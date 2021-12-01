import React from 'react';
import platelogo from "./platelogo.png";
import { Link } from "react-router-dom"; 
import Cookies from 'universal-cookie';

function Home(){

    const cookies = new Cookies();
    return(
        <div className="App container py-2">
        <div class="jumbotron border border-dark">
            <h1 class="display-4">Plate</h1>
                <p class="lead">This is where you find the best food from new restaurants you good too.</p>
            <hr class="my-4"/>
                <p>Cool things happen when you login or signup</p>
                <p class="lead">
                {
                cookies.get("access_token") ?
                <>
                <Link to={'/map'}>
                <img src={platelogo} class="img-fluid" alt="logo"/>
                </Link>
                </>
                :
                <>
                <Link to={'/login'}>
                <img src={platelogo} class="img-fluid" alt="logo"/>
                </Link>
                </>
            }
                
                 </p>
        </div>
        </div>
    );
}

export default Home;