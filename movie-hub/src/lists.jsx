import React, { useState, useEffect } from 'react';

function List() {
  const [toys, settoys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(data => settoys(data));
  }, []);

  return (
 <div>
  <h2>Movie Collection</h2>
  <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
 <div className="card">
   <div className="card-body">
    <h5 className="card-title">Card title</h5>

          {toys.map(toy => (
            <div key={toy.id}>
                <img src={toy.image} alt={toy.name}></img>
                <p>{toy.created_at}</p>
              <p>{toy.updated_at}</p>
              <a href="#" class="btn btn-primary">reviews</a>
            </div>
          ))}
    </div>

    </div>
    </div>
    
    </div>
    </div>
  );
}

export default List;
