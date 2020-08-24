import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from "axios";
import editProductBroadcast from '../action/editproductbroadcast';
import productClickedBroadcast from '../action/productclickedbroadcast';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}
class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.product.id,
            imageURL: this.props.product.imageURL,
            name: this.props.product.name,
            category: this.props.product.category,
            price: this.props.product.price,
            quantity: this.props.product.quantity,
            stock: this.props.product.stock,
            errors: {
                imageError: "",
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
        if (this.state.imageURL === "") {
            this.setState({ buttonStatus: true })
            errors.imageError = "Kindly upload the image!"
            return false
        }
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

    getUrl = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.imageError = "" || (!event.target.value.trim().match(/[(http(s)?)://(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) ? "Enter authentic URL !" : ""
        this.setState({ imageURL: event.target.value })

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
                this.props.editProduct(response.data)
                this.props.history.push("/")
            }, error => {
                console.log(error)
            })
    }

    edit = (event) => {
        if (this.checkValidation()) {
            event.preventDefault()
            let editedproduct = {
                imageURL: this.state.imageURL,
                name: this.state.name,
                category: this.state.category,
                price: this.state.price,
                quantity: this.state.quantity,
                stock: this.state.stock
            }
            axios.put("http://localhost:3000/products/" + this.state.id, editedproduct)
                .then(response => {
                    console.log(response)
                    console.log(response.data)
                    this.props.update(response.data)
                    console.log("Product Edited !")
                    this.allProducts()
                }, error => {
                    console.log(error)
                })

        }
    }

    render() {
        if (this.props.product === null) {
            return (
                <div>
                    <h2>No edit option clicked yet !</h2>
                </div>
            )
        }
        const textStyle = {
            width: '500px',
            padding: '10px 30px',
            marging: '8px 0',
            display: 'inline-block'
        }
        return (
            <div>
                <form name="form" onChange={this.handleSubmit} style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h2>Edit Product</h2>
                    <label htmlFor="Image">Image:</label> &emsp;  &emsp;
                    <input type="url" id="imageURL" value={this.state.imageURL} onChange={this.getUrl} style={textStyle} placeholder="Image URL* *" noValidate />
                    <br></br>
                    {this.state.errors.imageError.length > 0 && <span className="error">{this.state.errors.imageError}</span>}
                    <br />
                    <div className="name">
                        <label htmlFor="name">Name:</label> &emsp;  &emsp;
                            <input type="text" value={this.state.name} style={textStyle} id="name" onChange={this.getName}
                            placeholder="Product Name *" noValidate />
                        <br></br>
                        {this.state.errors.nameError.length > 0 && (
                            <span className="error">{this.state.errors.nameError}</span>
                        )}
                    </div><br />
                    <div>
                        <label>Category:</label> &emsp;
                            <select defaultValue={this.state.category} id="category" style={textStyle}
                            onChange={this.getCategory}
                        >
                            <option value="">--select--</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </select>
                        <br></br>
                        {this.state.errors.categoryError.length > 0 && (
                            <span className="error">{this.state.errors.categoryError}</span>
                        )}
                    </div><br />
                    <div className="price">
                        <label htmlFor="price">Price:</label> &emsp;  &emsp;  &nbsp;
                            <input
                            type="number" name="price" value={this.state.price} style={textStyle} id="price" onChange={this.getPrice} required
                            placeholder="Product Price *"
                            noValidate />
                        <br></br>
                        {this.state.errors.priceError.length > 0 && (
                            <span className="error">{this.state.errors.priceError}</span>
                        )}
                    </div><br />
                    <div className="quantity">
                        <label htmlFor="quantity">Quantity:</label> &nbsp;
                            <input
                            type="number" name="quantity" value={this.state.quantity} style={textStyle} id="quantity" onChange={this.getQuantity} required
                            placeholder="Product Quantity *"
                            noValidate />
                        <br></br>
                        {this.state.errors.quantityError.length > 0 && (
                            <span className="error">{this.state.errors.quantityError}</span>
                        )}
                    </div><br />
                    <div className="stock">
                        <label htmlFor="stock">Stock Available:</label> &emsp; &emsp; &nbsp;
                        <select defaultValue={this.state.stock} id="stock" style={textStyle}
                            onChange={this.getStock}
                        >
                            <option value="">--select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br></br>
                        {this.state.errors.stockError.length > 0 && (
                            <span className="error">{this.state.errors.stockError}</span>
                        )}
                    </div><br />
                    <div>
                        <button disabled={this.state.buttonStatus} onClick={this.edit}>Edit product</button>
                    </div>
                    <br />
                </form>
            </div>
        )
    }
}

function convertStoreToProps(store) {
    console.log("Product detail received from store")
    console.log(store)
    return {
        product: store.productClicked
    }
}

function convertPropsToEvent(dispatch) {
    return bindActionCreators({
        editProduct: editProductBroadcast,
        update: productClickedBroadcast
    }, dispatch)
}
export default connect(convertStoreToProps, convertPropsToEvent)(EditProduct);