import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllMeals.css';

const url = "http://localhost:5000/meals";

const AllMeals = () => {

    useEffect(() => {
        componentDidMount();
    }, [])
    
    const [meals, setMeals] = useState("");
    const [loading, setLoading] = useState(false);

    function componentDidMount() {
        axios.get(url)
            .then((res) => { console.log(res);
            setMeals(res.data)
            setLoading(true)
        })
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