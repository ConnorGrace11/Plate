import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllMeals.css';

const AllMeals = () => {

    useEffect(() => {
        getMeals()
    }, [])
    
    const [meals, setMeals] = useState("");
    const [loading, setLoading] = useState(false);

    const getMeals = async () => {
        try {
            const mealResponse = await axios.get("http://localhost:3001/meals"/* ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setMeals(mealResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div className="all-items">
            <h1>MEALS!</h1>
        </div>
        <div className="allmeals">
            {loading && 
            meals.map( (meal) => (
                <div className="meal">
                    <h2>{ meal.name }</h2>
                    <h5>{ meal.category }</h5>
                    <p>{ meal.todo }</p>  
                    
                </div>
            ))}      
        </div>
        </>
    )
}

export default AllMeals;