import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';
// reference: https://reactgo.com/react-router-useparams-hook/

const Restaurant = () => {

    let { restaurantId } = useParams()
    
    useEffect(() => {
        getRestaurant();
    }, []);
    

    const [restaurant, setRestaurant] = useState("");
    const [loading, setLoading] = useState(false);

    const getRestaurant = async () => { 
        try {
            //console.log(restaurantId)
            const restaurantResponse = await axios.get(`http://localhost:3001/restaurants/${restaurantId}`
            /*   restaurantId?_id= ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setRestaurant(restaurantResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div >
        <br></br>
            <h1>Restaurant</h1>
            <br></br>
        </div>
        <div>
        {loading && 
            [restaurant].map( (place) => (
                <div key={place._id}>
                    <h2>Name: { place.name }</h2>
                    <h5>Location: {place.location}</h5>
                    <h7>Phone Number: {place.phoneNumber}</h7>
                    <p><Link to={`/restaurants/${place._id}/items`}>Menu</Link></p>
                    <p>Rating: {place.rating} </p>
                    
                    
                </div>
            ))}      
            <h3><Link to='/restaurants'>Restaurants</Link></h3>
        </div>
        </>
    );
}
export default Restaurant;
