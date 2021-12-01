import React, { Component } from 'react';
// import { withAuth } from '@okta/okta-react';
// import { BrewstrRef } from '../../firebase';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StarRating from './StarRating';
import './RatingPage.css';

class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      rating: 0,
      user: ''
    };
  }

  submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://143.198.25.164:5000/restaurants/:restaurantId/items/:itemId/reviews/", { 
        //description: descriptionReg,
        //rating = ratingReg,
        //review = reviewReg
    })
     .then(response => {
        console.log(response.data)
        //setRegistered(true)
        //setShowing(true)
    })
    .catch(error => {
        console.log(error.response.data)
        //setRegistered(false)
        //setShowing(true)
    })
  
  }
  async componentDidMount(){
    // const user = await this.props.auth.getUser();
    // this.setState({user:user.email});
  }


  /* handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
  };

  saveRating = () => {
    console.log(this.state);
    // BrewstrRef.push()
    //   .set(this.state)
    //   .then(() => {
    //     this.props.history.push('/ratinglist');
    //   });
  }; */

  render() {
    return (
      <>
      <div className="rating-form">
        <div className="heading">Rate and Review</div>
        <div className="form-input rating">
          <label htmlFor="rating">Rating:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick= {this.setRating}
          />
        </div>
        <div className="form-input">
          <label htmlFor="description"></label>
          <textarea
            name="description"
            id="description"
            //onChange={(e) => { setDescriptionReg(e.target.value);}}
            placeholder="Comments for the review"
          />
        </div>
        <div className="actions">
          <button type="submit" class="btn btn-success" onClick={this.saveRating}>
            Submit Rating
          </button>
        </div>
      </div>
      <br></br>
      <div>
      <h2><Link to='/restaurants'>Back to All Restaurants</Link></h2>
    </div>
    </>
      
    );
  }
}


export default RatingPage;