import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllRestaurants = () => {
    
    useEffect(() => {
        getRestaurants()
    }, [])

    const [restaurants, setRestaurants] = useState("");
    const [loading, setLoading] = useState(false);

    const getRestaurants = async () => {
        try {
            const restaurantResponse = await axios.get("http://localhost:3000/reviews"/* ,{
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
            restaurants.map( (item) => (
                <div>
                    <h2>{ item.name }</h2>
                    <h5>{ item.location }</h5>
                    <p>{ item.rating }</p>   
                </div>
            ))}      
        </div>
        </>
    );
}

export default AllRestaurants;
