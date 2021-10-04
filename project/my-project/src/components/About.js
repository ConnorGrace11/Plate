import React from 'react';
import Footer from './Footer';

function About() {
    return (
        <div class="container-fluid">
        <br></br>
        <div class="row">
    <div class="card text-dark bg-light mb-3">
  <div class="card-header">About Us</div>
  <div class="card-body">
    <h5 class="card-title">We show the meals of different restuarants</h5>
    <p class="card-text">It includes for all unique meals in differnt parts of the day. 
    Below shows an example of an upload photo</p>
  </div>
</div>

</div>
<br></br>
    <div class="row text-center">
    <div class="col ">
    <h3>Breakfast</h3>
    </div>
    <div class="col">
    <h3>Lunch</h3>
    </div>
    <div class="col">
    <h3>Dinner</h3>
    </div>
    
    </div>
    <br></br>
    <div class="row">
    <div class="card-group">
  <div class="card">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*TG71vw_6XD6cN7TU0mpt1A.jpeg&f=1&nofb=1" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pancakes</h5>
      <p class="card-text">Original Pancake House</p>
      <p class="card-text">Fruit Pancakes were delicious</p>
      <p class="card-text"><small class="text-muted">Uploaded on Septmeber 29, 2021</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgourmetdemexico.com.mx%2Fwp-content%2Fuploads%2F2018%2F01%2Fsandwich-gourmet-doner-kebab-600x600.jpg&f=1&nofb=1" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Gyro</h5>
      <p class="card-text">Greek Kitchen</p>
      <p class="card-text">Good </p>
      <p class="card-text"><small class="text-muted">Uploaded on Septmeber 20, 2021</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbakersestate.in%2Fwp-content%2Fuploads%2F2019%2F09%2FBakers_Estate_White-Forest-Cake-Slice-600X600.jpg&f=1&nofb=1" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Cheescake</h5>
      <p class="card-text">Mary's restuarant</p>
      <p class="card-text">Cheesecake was good</p>
      <p class="card-text"><small class="text-muted">Uploaded on October 2, 2021</small></p>
    </div>
  </div>
</div>
    </div>
    <br></br>
    
<Footer/>
    </div>
    );  
}
export default About;