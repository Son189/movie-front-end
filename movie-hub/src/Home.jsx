import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";


import './Home.css'


function Home(){

    return(
        <>
       <div className="container">
        <h1>House of movies</h1>
       <button className="btnnn">
       <Link to='/list'>Movie collection</Link>
       </button>
       
       </div>
   
        </>
    )
}
export default Home;