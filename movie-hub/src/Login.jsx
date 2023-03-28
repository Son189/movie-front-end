import React, { useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log (username, password)
        setisLoggedIn(true);
    }

    const handleLogout = () => {

        setisLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Hello {username}, Welcome to our MovieHub</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label className="form-label">
                        Username: <input type= "text" value={username} onChange={event => setUsername(event.target.value)}/>
                    </label>
                    <p>
                    <label>
                        Password: <input type= "text" value={password} onChange={event => setPassword(event.target.value)}/>
                    </label>
                    </p>
                    <button type="Submit" className="btn btn-info">Login</button>
                </form>
            ) }
        </div>
    );
}

export default Login