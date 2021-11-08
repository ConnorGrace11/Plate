import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllRestaurants.css';

const AllRestaurants = () => {
    
    const [restaurants, setRestaurants] = useState("");
    const [loading, setLoading] = useState(false);

     useEffect(() => {
        getsRestaurants()
    }, [])

    const getsRestaurants = async () => {
        try {
            const restaurantResponse = await axios.get(`http://localhost:3001/restaurants`)
            setRestaurants(restaurantResponse.data)
            setLoading(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div className="all-items">
            <h1>Restaurants!</h1>
        </div>
        <div className="allrestaurants">
            {loading && restaurants.map((item) => (
                <div className="restaurant">
                    <h2>{ item.name }</h2>
                    <h5>{ item.location }</h5>
                    <p>{ item.rating }</p>   
                </div>
            ))}      
        </div>
        </>
    )
}

export default AllRestaurants;