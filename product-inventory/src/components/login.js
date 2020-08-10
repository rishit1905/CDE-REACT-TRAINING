import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const validEmailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errors: {
                username: '',
                password: '',
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
            <div className="log">
                <img src="./image/profile-icon-9.png" alt="" />
                <form onChange={this.handleSubmit} noValidate>
                    <input type="text" id="username" placeholder="Username" onChange={this.handleChange} required noValidate />
                    {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                    <br />
                    <input type="text" id="password" placeholder="Password" onChange={this.handleChange} required noValidate />
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                    <br />
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