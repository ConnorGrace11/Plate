import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllMeals.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';

const AllRestaurants = () => {
    
    //const { restaurantId } = useParams();

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
            restaurants.map(restaurant => (
                <div key={restaurant._id}>
                    <h2><Link to={`/restaurants/${restaurant._id}`}>{ restaurant.name }</Link></h2>
                    <br></br>
                </div>
            ))}      
        </div>
        
        </>
    );
}

export default AllRestaurants;
