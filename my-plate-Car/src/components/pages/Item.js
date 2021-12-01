import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';


const Item = () => {
    const [items, setItems] = useState("");
    const [loading, setLoading] = useState(false);
    let { restaurantId } = useParams()
    let { itemId } = useParams()
    // let history = useHistory();

    useEffect(() => {
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
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <div >
            <h1>Meal Item</h1>
        </div>
        <div>
        {loading && 
            [items].map( (item) => (
                <div>
                    <h2>Name: { item.name }</h2>
                    <h5>Price: { item.price }</h5>
                    <img src={item.imgMeal} alt=""/>
                    <p>Ingredients: { item.ingredients}</p>
                    <p>Allergens: { item.allergens }</p>
                    <p>Category: { item.category }</p>
                    <p>Subcategory: { item.subCategory }</p>
                    <p>Review: { item.review }</p>
                    <p>Description: { item.description }</p>
                </div>
            ))}
            <button type="submit" class="btn btn-success"><Link to='/reviews'>Add a Review to this Item</Link></button>
            <br></br>  
            <br></br> 
            <h3><Link to='/restaurants'>Restaurants</Link></h3>
            {/* <Link onClick={() => history.goBack()}>Back</Link>     */}
        </div>
        </>
    );
}
export default Item;