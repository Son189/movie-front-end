import React, { useState, useEffect } from 'react';

function MovieReviews(props) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${props.movieId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [props.movieId]);

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleNewReviewSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/movies/${props.movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: newReview })
    })
      .then(response => response.json())
      .then(data => {
        setNewReview('');
        setReviews([...reviews, data]);
      });
  };

  const handleReviewDelete = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedReviews = reviews.filter(review => review.id !== id);
        setReviews(updatedReviews);
      });
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.description}
            <button onClick={() => handleReviewDelete(review.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewReviewSubmit}>
        <div>
          <label htmlFor="newReview">New Review:</label>
          <input type="text" id="newReview" value={newReview} onChange={handleNewReviewChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MovieReviews;
