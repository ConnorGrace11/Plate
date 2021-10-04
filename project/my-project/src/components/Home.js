import React from 'react';
import Footer from './Footer';

function Home() {
    return(
        
        <div class="container-fluid bg-info ">
        <br></br>
        <div class="row text-center">
        <div class="col ">
        <h3>This page is about meals</h3>
        </div>
        <div class="col">
        You can go to the login page to get detailed information sent to you.
        </div>
        <div class="col">
        You can got to the about to learn more about us.
        </div>
        <div class="col">
        You can go to the photos page to look at grabbing them
        </div>
        </div>
        <br></br>
        <div class="row">
        <div class="card text-center border-warning border-3 bg-primary">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">A burger meal</h5>
    <p class="card-text">You have a burger with fries and a milkshake</p>
    <a href="about" class="btn btn-success">Go to About Us</a>
  </div>
  <div class="card-footer ">
    1 day ago
  </div>
</div>
        </div>
        <br></br>
        <div class="row">
  <div class="col-sm-6">
    <div class="card border-warning">
      <div class="card-body">
        <h5 class="card-title">Fries</h5>
        <p class="card-text">These are made with potatoes from Idaho</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border-warning">
      <div class="card-body">
        <h5 class="card-title">Burger</h5>
        <p class="card-text">Includes bun, tomatoes, lettuce, pickles, mustard, and ketchup</p>
        
      </div>
    </div>
  </div>
</div>
<br></br>
<div class="row">
<div class="col">
<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
  </div>
  </div>
  <div class="col">
  <div class="card text-dark bg-light mb-3">
  <div class="card-header">Upload a photo of your food</div>
</div>
  </div>

</div>
<br></br>
<br></br>
<Footer/>
        </div>
        
    ); 
}
export default Home;