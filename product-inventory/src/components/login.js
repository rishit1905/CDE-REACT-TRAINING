import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {}
    render() {
        return (
            <div class="log">
                <img src="./image/profile-icon-9.png" />
                <form>
                    <input type="text" placeholder="Username" required /><br />
                    <input type="text" placeholder="Password" required /><br />
                    <Link to="/dashboard" class="center">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup" id="#signup">New User? Signup</Link>
                </form>
            </div>
        );
    }
}

export default Login;