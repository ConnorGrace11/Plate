import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllMeals.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';

const AllRestaurants = () => {
    
    let { url } = useRouteMatch();

    useEffect(() => {
        getRestaurants()
    }, [])

    const [restaurants, setRestaurants] = useState("");
    const [loading, setLoading] = useState(false);

    const getRestaurants = async () => {
        try {
            const restaurantResponse = await axios.get("http://localhost:3001/restaurants"/* ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setRestaurants(restaurantResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div className="all-items">
            <h1>RESTAURANTS</h1>
        </div>
        <div>
        {loading && 
            restaurants.map(item => (
                <div key={item._id}>
                    <h2><Link to={`/restaurants/${item._id}/items`}>{ item.name }</Link></h2>
                    <h5>{item.location}</h5> 
                    <br></br>
                </div>
            ))}      
        </div>
        
        </>
    );
}

export default AllRestaurants;
