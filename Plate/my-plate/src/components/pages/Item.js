import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';


const Item = () => {
    const { restaurantId } = useParams()
    const { itemId } = useParams()

    useEffect(() => {
        getItems()
    }, [])

    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(false);

    const getItems = async () => {
        try {
            const itemsResponse = await axios.get(`http://localhost:3001/restaurants/${restaurantId}/items/${itemId}`/* ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setItems(itemsResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div >
            <h1>Meal Item</h1>
        </div>
        <div>
        {loading && 
            items.map( (item) => (
                <div>
                    <h2>Name: <Link to={`/restaurants/${item._id}/items/${item._id}`}>{ item.name }</Link></h2>
                    <h5>Price: { item.price }</h5>
                    <p>Ingredients: { item.ingredients }</p>
                    <p>Allergens: { item.allergens }</p>
                    <p>Category: { item.category }</p>
                    <p>Subcategory: { item.subCategory }</p>
                    <p>Review: { item.review }</p>
                    <p>Description: { item.description }</p>
                </div>
            ))}  
            <Link to='/'>Back</Link>    
        </div>
        </>
    );
}
export default Item;