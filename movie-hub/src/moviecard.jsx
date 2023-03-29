import React from "react";

function MovieCard({movie}){
 const { id, title, image, actor,review} = movie
 
 
    return(
        <div className="card">
            <img src={image} alt={title} className= "movie-tar"/>
            <p>{review}</p>
        </div>
    )
}

export default MovieCard;