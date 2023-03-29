import React from "react";
import { Link} from "react-router-dom"
function Nav(){
return(
    <div className="container2">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto ms-2 mt-2">
               <li className="nav-item">
                 <Link className="active me-3 navbar-brand" to="/">Home</Link>
               </li>
               <li className="nav-item">
                 <Link className="active me-3 navbar-brand" to="/login">Login</Link>
               </li>
               <li className="nav-item">
                 <Link className="active me-3 navbar-brand" to="/sign">sign</Link>
               </li>
               </ul>
               </div>
               </div>
               </nav>

</div>
)
    
}
export default Nav