import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const ReviewItem = () => {

    let { restaurantId } = useParams()
    let { itemId } = useParams()
    let { reviewId } = useParams()
    //let history = useHistory();

    useEffect(() => {
        getReviews()
    }, [])

    const [reviews, setReviews] = useState("");
    const [loading, setLoading] = useState(false);

    const getReviews = async () => {
        try {
            console.log(itemId)
            console.log(restaurantId)
            const reviewsResponse = await axios.get(`http://143.198.25.164:5000/reviews`/* ,{
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            } */)
            setReviews(reviewsResponse.data)
            setLoading(true) 
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <>
        <div >
            <h1>Reviews</h1>
        </div>
        <div>
        {loading && 
            [reviews].map( (review) => (
                <div>
                    <h2>UserName: { review.username }</h2>
                    <p>Restaurant: { review.restaurantId }</p>
                    <p>Item: { review.itemId }</p>
                    <p>Rating: { review.rating }</p>
                    <p>Description: { review.description }</p>
                    {/* <button type="submit" class="btn btn-success"><Link to={`/restaurants/${review.restaurantId}/items/${review._id}/reviews`}>Add a Review to this Item</Link></button> */}
                </div>
            ))}
            
            <br></br>  
            <br></br> 
            <h2><Link to='/restaurants'>Back to All Restaurants</Link></h2>
        </div>
        </>
    );

}

export default ReviewItem;