import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';


class Signup extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div className="logsign">
                    <figure>
                        <input type="image" src="./image/profile-icon-9.png" alt=""/>
                        <figcaption>ADD PHOTO</figcaption>
                    </figure>

                    <form>
                        <input type="email" placeholder="Email" required /><br />
                        <input type="password" placeholder="Password" required /><br />
                        <input type="password" placeholder="Confirm Password" required /><br />
                        <Link to="/" className="center">
                            <button className="centersign">Create Account</button>
                        </Link>

                    </form>
                </div>
            </div>

        );
    }
}

export default Signup;