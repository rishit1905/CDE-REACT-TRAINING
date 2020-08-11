import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {
                username: "",
                password: "",
            },
            buttonStatus: true
        };
    }
    getUsername = (event) => {
        let errors = this.state.errors
        errors.username = "" || (!event.target.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) ? "Invalid email" : ""
        this.setState({ username: event.target.value })
    }

    getPassword = (event) => {
        let errors = this.state.errors
        errors.password = (!event.target.value.trim().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) ? "Password must have atleast a letter, a number and should be equal to or greater than 8 digits" : ""
        this.setState({ password: event.target.value })
    }

    checkValidation = () => {
        let errors = this.state.errors;
        if (this.state.username === "") {
            this.setState({ buttonStatus: true })
            errors.username = "Username required!"
            return false
        }
        if (this.state.password === "") {
            this.setState({ buttonStatus: true })
            errors.password = "Password required!"
            return false
        }
        return true;
    }

    authorize = (e) => {
        if (this.checkValidation()) {
            e.preventDefault()
            console.log("Login successful !")
            this.props.history.push("/dashboard")
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
            this.setState({ buttonStatus: false })
        } else {
            console.error('Invalid Form')
            this.setState({ buttonStatus: true })
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="log">
                <img src="./image/profile-icon-9.png" alt="" />
                <form onChange={this.handleSubmit} noValidate>
                    <input type="email" id="username" placeholder="Username" onChange={this.getUsername} required noValidate />
                    {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                    <input type="password" id="password" placeholder="Password" onChange={this.getPassword} required noValidate /><br />
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                    <button id="login" onClick={this.authorize} disabled={this.state.buttonStatus}>Login</button>
                    <Link to="/signup" id="#signup">New User? Signup</Link>
                </form>
            </div>
        );
    }
}

export default Login;