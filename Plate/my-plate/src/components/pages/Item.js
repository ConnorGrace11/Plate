import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { /* BrowserRouter as Router, useHistory, */ Link, useParams} from 'react-router-dom';
import ReviewItem from './ReviewItem';


const Item = () => {
    let { restaurantId } = useParams()
    let { itemId } = useParams()
    //let history = useHistory();

    useEffect(() => {
        getItems()
    }, [])

    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(false);

    const getItems = async () => {
        try {
            console.log(itemId)
            console.log(restaurantId)
            const itemsResponse = await axios.get(`http://143.198.25.164:5000/restaurants/${restaurantId}/items/${itemId}`/* ,{
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
        <div className="all-items">
            <h1>Meal Item</h1>
        </div>
        <div>
        {loading && 
            [items].map( (item) => (
                <div>
                    <h2>Name: { item.name }</h2>
                    <h5>Price: { item.price }</h5>
                    <img src={item.imgMeal}/>
                    <p>Ingredients: { item.ingredients}</p>
                    <p>Allergens: { item.allergens }</p>
                    <p>Category: { item.category }</p>
                    <p>Subcategory: { item.subCategory }</p>
                    <p>Review: { item.review }</p>
                    <p>Description: { item.description }</p>
                    <button type="submit" class="btn btn-success"><Link to={`/restaurants/${item.restaurantId}/items/${item._id}/reviews`}>Add a Review to this Item</Link></button>
                    <br></br>
                    {/* <button type="submit" class="btn btn-success"><Link to={`/reviews`}>Look at Reviews</Link></button> */}
                </div>
            ))}
            
            <br></br>  
            <br></br> 
            <h2><Link to='/restaurants'>Back to All Restaurants</Link></h2>
            {/* <Link onClick={() => history.goBack()}>Back</Link>     */}
        </div>
        </>
    );
}
export default Item;