import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addProductBroadcast from '../action/addproductbroadcast';
import axios from "axios";

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}
class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            category: "",
            price: 0,
            quantity: 0,
            stock: "",
            errors: {
                nameError: "",
                categoryError: "",
                priceError: "",
                quantityError: "",
                stockError: ""
            },
            buttonStatus: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (validateForm(this.state.errors)) {
            console.log("Valid")
            this.setState({ buttonStatus: false })
        } else {
            console.log("Not Valid")
            this.setState({ buttonStatus: true })
        }
    }

    checkValidation = () => {
        let errors = this.state.errors;
        if (this.state.name === "") {
            this.setState({ buttonStatus: true })
            errors.nameError = "Product name required!"
            return false
        }
        if (this.state.category === "") {
            this.setState({ buttonStatus: true })
            errors.categoryError = "Product category required!"
            return false
        }
        if (this.state.price === 0) {
            this.setState({ buttonStatus: true })
            errors.priceError = "Product price required!"
            return false
        }
        if (this.state.quantity === 0) {
            this.setState({ buttonStatus: true })
            errors.quantityError = "Product quantity required!"
            return false
        }
        if (this.state.stock === "") {
            this.setState({ buttonStatus: true })
            errors.stockError = "Product stock required!"
            return false
        }

        return true;
    }

    getName = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.nameError = "" || (!event.target.value.trim().match(/^([a-zA-Z0-9 _-]+)$/)) ? "Only non-empty alphanumeric values allowed !!" : ""
        this.setState({
            name: event.target.value
        })

    }
    getCategory = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.categoryError = event.target.value === "" ? "Select a category !!" : ""
        this.setState({ category: event.target.value })

    }
    getPrice = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.priceError = (!event.target.value.match(/^(?:[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Invalid price !!" : ""
        this.setState({
            price: event.target.value
        })

    }
    getQuantity = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors;
        errors.quantityError = (!event.target.value.match(/^[1-9]+[0-9]*$/)) ? "Quantity is invalid!!" : ""
        this.setState({ quantity: event.target.value })
    }
    getStock = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.stockError = event.target.value === "" ? "Select stock availability !!" : ""
        this.setState({
            stock: event.target.value
        })

    }

    allProducts() {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                this.props.newProduct(response.data)
        }, error => {
                console.log(error)
            })
    }

    addProduct = (event) => {
        if (this.checkValidation()) {
            event.preventDefault()
            console.log("Adding product..");
            let product = {
                name: this.state.name,
                category: this.state.category,
                price: this.state.price,
                quantity: this.state.quantity,
                stock: this.state.stock
            }
            axios.post("http://localhost:3000/products", product)
                .then(response => {
                    console.log(response)
                    console.log("Done")
                    this.allProducts()
                }, error => {
                    console.log(error)
            })
            
        }
    }

    render() {
        const { errors } = this.state;
        const textStyle = {
            width: '500px',
            padding: '10px 30px',
            marging: '8px 0',
            display: 'inline-block'
        }
        return (
            <div>
                <form name="form" onChange={this.handleSubmit} style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h2>Add Product</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label> &emsp;  &emsp;
                            <input type="text" style={textStyle} id="name" onChange={this.getName}
                            placeholder="Product Name *" noValidate />
                        <br></br>
                        {errors.nameError.length > 0 && (
                            <span className="error">{errors.nameError}</span>
                        )}
                    </div><br />
                    <div>
                        <label>Category:</label> &emsp;
                            <select defaultValue={this.state.selectValue} id="category" style={textStyle}
                            onChange={this.getCategory}
                        >
                            <option value="">--select--</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </select>
                        <br></br>
                        {errors.categoryError.length > 0 && (
                            <span className="error">{errors.categoryError}</span>
                        )}
                    </div><br />
                    <div className="price">
                        <label htmlFor="price">Price:</label> &emsp;  &emsp;  &nbsp;
                            <input
                            type="number" name="price" style={textStyle} id="price" onChange={this.getPrice} required
                            placeholder="Product Price *"
                            noValidate />
                        <br></br>
                        {errors.priceError.length > 0 && (
                            <span className="error">{errors.priceError}</span>
                        )}

                    </div><br />
                    <div className="quantity">
                        <label htmlFor="quantity">Quantity:</label> &nbsp;
                            <input
                            type="number" name="quantity" style={textStyle} id="quantity" onChange={this.getQuantity} required
                            placeholder="Product Quantity *"
                            noValidate />
                        <br></br>
                        {errors.quantityError.length > 0 && (
                            <span className="error">{errors.quantityError}</span>
                        )}
                    </div><br />
                    <div className="stock">
                        <label htmlFor="stock">Stock Available:</label> &emsp; &emsp; &nbsp;
                        <select defaultValue={this.state.selectValue} id="stock" style={textStyle}
                            onChange={this.getStock}
                        >
                            <option value="">--select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br></br>
                        {errors.stockError.length > 0 && (
                            <span className="error">{errors.stockError}</span>
                        )}
                    </div><br />
                    <div>
                        <button disabled={this.state.buttonStatus} onClick={this.addProduct}>Add</button>
                    </div>
                    <br />
                </form>
            </div>
        );
    }
}

function convertPropsToEvent(dispatch) {
    return bindActionCreators({
        newProduct: addProductBroadcast
    }, dispatch)
}
export default connect(null, convertPropsToEvent)(AddProduct);