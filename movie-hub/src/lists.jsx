import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom"


function List() {
  const [movies, setmovies] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setmovies(data));
  }, []);

  return (
    <div>
      <h2>Movie Collection</h2>
      <div className="row">
        {movies.map(movie => (
          <div className="col-sm-6 mb-3 mb-sm-0" key={movie.id}>
            <div className="card">
              <img src={movie.image} alt={movie.name}></img>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p>{movie.description}</p>
               {movies.actors && movie.actors.map(actor =>{
                <div key={movie.id}>
                  <p>{actor.name}</p>
                  <p>{actor.age}</p>
               </div>
              }) }
                <button className='btn1' >
                <Link  to= '/review'>Reviews</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

