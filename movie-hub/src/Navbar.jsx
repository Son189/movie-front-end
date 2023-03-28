import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <ul className="d-flex">
                    <li className="nav-item">
                        <button className="btn btn-warning">
                            <Link className="text-dark nav-link" to="/login">Login Page</Link>
                        </button>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;