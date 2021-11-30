import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';

const Menu = () => {
    let { restaurantId } = useParams()
    const routeMatch = useRouteMatch("/restaurants/:restaurantId");

    useEffect(() => {
        getMenu()
    }, [])

    const [menu, setMenu] = useState("");
    const [loading, setLoading] = useState(false);

    const getMenu = async () => {
        try {
            //console.log(restaurantId)
            const menuResponse = await axios.get(`http://143.198.25.164:5000/restaurants/${restaurantId}/items`/* ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setMenu(menuResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
        <div >
            <h1>Meal Items</h1>
        </div>
        <div>
        {loading && 
            menu.map( (meal) => (
                <div>
                    <h2>Name:  <Link to={`/restaurants/${meal.restaurantId}/items/${meal._id}`}> {meal.name } </Link></h2>
                    <h5>Price: { meal.price }</h5>
                    <img src={meal.imgMeal}/>
                    <p>Allergens: { meal.allergens }</p>
                    <p>Category: { meal.category }</p>
                    <p>Subcategory: { meal.subCategory }</p>
                    <p>Description: { meal.description }</p>
                </div>
            ))}      
            <h3><Link to='/restaurants'>Restaurants</Link></h3>
        </div>
        </>
    );
}
export default Menu;