import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const validEmailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmpassword: null,
            errors: {
                username: '',
                password: '',
                confirmpassword: ''
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { id, value } = event.target;
        let errors = this.state.errors;

        switch (id) {
            case 'username':
                errors.username =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            case 'confirmpassword':
                errors.confirmpassword =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [id]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="logsign">
                    <figure>
                        <input type="image" src="./image/profile-icon-9.png" alt="" />
                        <figcaption>ADD PHOTO</figcaption>
                    </figure>

                    <form onChange={this.handleSubmit} noValidate>
                        <input id="username" type="email" onChange={this.handleChange} noValidate placeholder="Email" required />
                        {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                        <br />
                        <input id="password" type="text" onChange={this.handleChange} noValidate placeholder="Password" required />
                        {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        <br />
                        <input id="confirmpassword" type="text" onChange={this.handleChange} noValidate placeholder="Confirm Password" required />
                        {errors.confirmpassword.length > 0 && <span className='error'>{errors.confirmpassword}</span>}
                        <br />
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