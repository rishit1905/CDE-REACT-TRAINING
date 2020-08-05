import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';


class Signup extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div class="log">
                    <figure>
                        <input class="profile" type="image" src="./image/profile-icon-9.png" />
                        <figcaption>ADD PHOTO</figcaption>
                    </figure>

                    <form>
                        <input type="email" placeholder="Email" required /><br />
                        <input type="password" placeholder="Password" required /><br />
                        <input type="password" placeholder="Confirm Password" required /><br />
                        <Link to="/" class="center">
                            <button class="center">Create Account</button>
                        </Link>

                    </form>
                </div>
            </div>

        );
    }
}

export default Signup;