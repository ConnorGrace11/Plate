// Photos.js
//https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
import React from "react";
import "./Photos.css";
import { useFetch } from "./hooks";
//custom hoook

function Photos() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  

  return (
    
        <div class="container-fluid">
        <div class="row text-center">
        <h1>Photos</h1>    
        </div> 
        <br></br>
        <div class="row text-center">
        <div class="col">
        <div class="card" >
        <div class="card-body">
    < h5 class="card-title">Fetching images</h5>
    <h6 class="card-subtitle mb-2 text-muted">Using a file to grab images</h6>
    <p class="card-text">This is an example of it</p>
    
  </div>
</div>
        </div>
        <div class="col ">
        {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
        </div>
        </div>
        </div>
  );
}
export default Photos;