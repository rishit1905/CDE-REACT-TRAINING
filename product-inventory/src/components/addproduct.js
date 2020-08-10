import React from 'react';
import "./addproduct.css";
import axios from "axios";

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: "",
            name: "",
            brand: "",
            description: "",
            category: "",
            price: 0,
            stock: 0,
            errors: {
                imageError: "",
                nameError: "",
                brandError: "",
                descriptionError: "",
                priceError: "",
                stockError: ""
            },
            buttonStatus: true,
            selectedValue: "Mobiles"
        }
    }

    getUrl = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.files[0])
        // let errors = this.state.errors
        // let imageFile = event.target.files[0]

        // if (!imageFile) {
        //     errors.imageError = "Upload Image"
        // }
        // else if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        //     errors.imageError = "Please upload jpg | jpeg | png | gif only"
        // }
        // else {
        this.setState({ imageURL: event.target.files[0] })
        // }

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
    getBrand = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.brandError = "" || (!event.target.value.trim().match(/^([a-zA-Z0-9 _-]+)$/)) ? "Only non-empty alphanumeric values allowed !!" : ""
        this.setState({
            brand: event.target.value
        })

    }
    getDescription = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.descriptionError = "" || event.target.value.trim().length === 0 ? "Description is required !!" : ""
        this.setState({
            description: event.target.value
        })

    }
    getCategory = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ category: event.target.value })

    }
    getPrice = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.priceError = (!event.target.value.match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Invalid price !!" : ""
        this.setState({
            price: event.target.value
        })

    }
    getStock = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        let errors = this.state.errors
        errors.stockError = (!event.target.value.match(/^[1-9]+[0-9]*$/)) ? "Invalid stock amount !!" : ""
        this.setState({
            stock: event.target.value
        })

    }

    addProduct = (e) => {
        e.preventDefault()
        console.log("Adding product..")
        let productRequestBody = {
            "imageURL": this.state.imageURL,
            "name": this.state.name,
            "brand": this.state.brand,
            "description": this.state.description,
            "category": this.state.category,
            "price": this.state.price,
            "stock": this.state.stock,
        }
        axios.post("http://localhost:3000/products", productRequestBody)
            .then(response => {
                console.log(response)
                console.log("Done")
                this.props.history.push("/inventory")
            }, error => {
                console.log(error)
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (validateForm(this.state.errors)) {
            console.log("Valid")
        } else {
            console.log("Not Valid")
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <form onChange={this.handleSubmit} noValidate>
                    <fieldset>
                        <legend>ADD PRODUCT</legend>
                        <div className="columns">
                            <label>Image:</label>
                            <input type="file" id="imageURL" onChange={this.getUrl} noValidate />
                            {errors.imageError.length > 0 && <span className="error">{errors.imageError}</span>}
                            <br /><br />
                            <label>Product Name:</label>
                            <input type="text" id="name" onChange={this.getName} noValidate />
                            {errors.nameError.length > 0 && <span className="error">{errors.nameError}</span>}
                            <br /><br />
                            <label>Brand:</label>
                            <input type="text" id="brand" onChange={this.getBrand} noValidate />
                            {errors.brandError.length > 0 && <span className="error">{errors.brandError}</span>}
                            <br /><br />
                            <label>Description:</label>
                            <input type="text" id="description" onChange={this.getDescription} noValidate />
                            {errors.descriptionError.length > 0 && <span className="error">{errors.descriptionError}</span>}
                            <br /><br />
                            <label>Category:</label>
                            <select defaultValue={this.state.selectedValue} id="category" onChange={this.getCategory}>
                                <option value="">--select--</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Cameras">Cameras</option>
                                <option value="Laptops">Laptops</option>
                            </select><br /><br />
                            <label>Price:</label>
                            <input type="text" id="price" onChange={this.getPrice} noValidate />
                            {errors.priceError.length > 0 && <span className="error">{errors.priceError}</span>}
                            <br /><br />
                            <label>Stock:</label>
                            <input type="text" id="stock" onChange={this.getStock} noValidate />
                            {errors.stockError.length > 0 && <span className="error">{errors.stockError}</span>}
                            <br /><br />
                        </div>
                        <button onClick={this.addProduct} disabled={this.state.buttonStatus}>Add</button>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default AddProduct;