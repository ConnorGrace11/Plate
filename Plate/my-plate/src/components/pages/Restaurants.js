import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';


const Restaurant = ({ match }) => {

    const [meals, setMeals] = useState("");
    const { restaurantId } = useParams();
    
    useEffect(() => {
        getMeals();
    }, []);
    

    
    const [loading, setLoading] = useState(false);

    const getMeals = async () => { 
        try {
            console.log(match.params._id)
            const mealsResponse = await axios.get(`http://localhost:3001/restaurants/${match.params._id}`
            /*   restaurantId?_id= ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setMeals(mealsResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div >
        <br></br>
            <h1>Meal Items</h1>
            <br></br>
        </div>
        <div>
        {loading && 
            meals.map( (meal) => (
                <div>
                    <h2>Name: {<Link to={`/restaurants/${meal._id}/items/${meal._id}`}> </Link>}{ meal.name }</h2>
                    <h5>Location: {meal.location}</h5>
                    <p>Rating: {meal.rating} </p>
                    
                </div>
            ))}      
            <h3><Link to='/restaurants'>Restaurants</Link></h3>
        </div>
        </>
    );
}
export default Restaurant;
