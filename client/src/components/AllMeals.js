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
            const mealResponse = await axios.get("http://localhost:5000/meals")
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
            {loading && meals.map((item) => (
                <div className="meal">
                    <h2>{ item.name }</h2>
                    <h5>{ item.category }</h5>
                    <p>{ item.todo }</p>   
                </div>
            ))}      
        </div>
        </>
    )
}

export default AllMeals;