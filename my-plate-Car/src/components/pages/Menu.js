import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';

const Menu = () => {
    let { restaurantId } = useParams()
    // const routeMatch = useRouteMatch("/restaurants/:restaurantId");

    useEffect(() => {
        const getMenu = async () => {
            try {
                //console.log(restaurantId)
                const menuResponse = await axios.get(`http://localhost:5000/restaurants/${restaurantId}/items`/* ,{
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
        getMenu()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [menu, setMenu] = useState("");
    const [loading, setLoading] = useState(false);

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
                    <img src={meal.imgMeal} alt=""/>
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