import React from "react";
import "./Signup.css"

function Signup(){
    return(
        <div className="cont1">
            <h1>Signup</h1>
            <label HtmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username"/>
            <label HtmlFor="Email">Email</label>
            <input type="text" name="email" placeholder="Email"/>
            <label HtmlFor="Password">Password</label>
            <input type="password" name="password" placeholder="Password"/>
            <button>Sign Up</button>
        </div>
    )
}
export default Signup