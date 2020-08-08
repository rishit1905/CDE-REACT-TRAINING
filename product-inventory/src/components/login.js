import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {}
    render() {
        return (
            <div className="log">
                <img src="./image/profile-icon-9.png" />
                <form>
                    <input type="text" placeholder="Username" required /><br />
                    <input type="text" placeholder="Password" required /><br />
                    <Link to="/dashboard" className="center">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup" id="#signup">New User? Signup</Link>
                </form>
            </div>
        );
    }
}

export default Login;