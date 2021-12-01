import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { /* BrowserRouter as Router, */ Link, useRouteMatch, useParams, useLocation} from 'react-router-dom';

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

    /* const get_allergens = useRef(null);
    const [getResult, setGetResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
      };

    async function allergensNot() {
        const allergens = get_allergens.current.value;
    
        if (allergens) {
          try {
            const allergenResponse = await axios.get(`http://143.198.25.164:5000/restaurants/${restaurantId}/items?allergens_not=Soy`);
            console.log(allergens)
    
            const result = {
              status: allergenResponse.status + "-" + allergenResponse.statusText,
              headers: allergenResponse.headers,
              data: allergenResponse.data,
            };
    
            setGetResult(fortmatResponse(result));
          } catch (err) {
            setGetResult(fortmatResponse(err.response?.data || err));
          }
        }
      } 

      const get_prices = useRef(null);
    const [getResults, setGetResults] = useState(null);
    const fortmatResponses = (res) => {
        return JSON.stringify(res, null, 2);
      };

    async function price() {
        const price = get_prices.current.value;
    
        if (price) {
          try {
            const priceResponse = await axios.get(`http://143.198.25.164:5000/restaurants/${restaurantId}/items?price_lt${price}`);
            console.log(price)
    
            const results = {
              status: priceResponse.status + "-" + priceResponse.statusText,
              headers: priceResponse.headers,
              data: priceResponse.data,
            };
    
            setGetResults(fortmatResponses(results));
          } catch (err) {
            setGetResults(fortmatResponses(err.response?.data || err));
          }
        }
      } 
      
      const search = useLocation().search;
      const allergen = new URLSearchParams(search).get('name'); */
      
    return (
        <>
        <div className="all-items">
            <h1>Meal Items</h1>
            {/* <input type="text" ref={get_allergens} className="form-control ml-2" placeholder="Title" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary"><Link to={`/restaurants/${restaurantId}/items?allergens_not=Soy`}>Allergens</Link></button>
            </div>
            <input type="text" ref={get_prices} className="form-control ml-2" placeholder="Title" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={price}>price</button>
    </div>*/}
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
            <h2><Link to='/restaurants'>Back to All Restaurants</Link></h2>
        </div>
        </>
    );
}
export default Menu;