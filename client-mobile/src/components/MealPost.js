import React, { useState } from "react";
import axios  from "axios";

const MealPost = () => {
    const [data, setData] = useState({ name: "", category: "", todo: "" })
    const [clicked, setClicked] = useState(false);

    const handleChange = (e) => {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/meals', {
            name: data.name,
            category: data.category,
            todo: data.todo
        })
          .then((response) => {
            console.log(response);
            setClicked(true)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h2>Post a Meal</h2>
                <div>
                    <label htmlFor="name">name: </label>
                    <input 
                        type="name" 
                        name="name" 
                        id="name" 
                        placeholder="meal name" 
                        onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="category">category: </label>
                    <input 
                        type="category" 
                        name="category" 
                        id="category" 
                        placeholder="food type" 
                        onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="todo">todo: </label>
                    <input 
                        type="todo" 
                        name="todo" 
                        id="todo" 
                        placeholder="instructions..." 
                        onChange={e => handleChange(e)} />
                </div>
                <button type="submit">Submit</button>
            </form>

            { clicked ? <div>Added Meal: {data.name} </div> : <div></div> }
        </>
    )
}

export default MealPost;