import React from 'react';
import "./updateproduct.css";
import axios from "axios";

class UpdateProduct extends React.Component {
    constructor(props) {
        super(props)
        console.group(this.props.location)
        this.state = {
            imageURL: "",
            id: 0,
            name: "",
            brand: "",
            description: "",
            category: "",
            price: 0,
            stock: 0,
            buttonStatus: false
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.location.state !== undefined) {
            axios.get("http://localhost:3000/products/" + this.props.location.state.pid)
                .then(response => {
                    console.log(response)
                    this.setState({
                        imageURL: response.data.imageURL,
                        id: response.data.id,
                        name: response.data.name,
                        brand: response.data.brand,
                        description: response.data.description,
                        category: response.data.category,
                        price: response.data.price,
                        stock: response.data.stock
                    })
                }, error => {
                    console.log(error);
                 })
        }
    }
    getUrl = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ imageURL: event.target.value })

    }
    getName = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ name: event.target.value })

    }
    getBrand = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ brand: event.target.value })

    }
    getDescription = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ description: event.target.value })

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
        this.setState({ price: event.target.value })

    }
    getStock = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ stock: event.target.value })

    }

    updateProduct = () => {
        console.log("Updating Product..")
        let productRequestBody = {
            "imageURL": this.state.imageURL,
            "name": this.state.name,
            "brand": this.state.brand,
            "description": this.state.description,
            "category": this.state.category,
            "price": this.state.price,
            "stock": this.state.stock,
        }
        axios.put("http://localhost:3000/products/"+this.state.id, productRequestBody)
            .then(response => {
                console.log(response)
                console.log("Done")
                this.props.history.push("/inventory")
            }, error => {
                console.log(error)
            })
    }

    render() {
        if (this.props.location.state === undefined) {
            return (
                <div>
                    Not found!!
                </div>
            );
        }
        return (
            <div className="row">
                <form>
                    <fieldset>
                        <legend>UPDATE PRODUCT</legend>
                        <div className="columns">
                            <label>Image URL:</label>
                            <input type="text" id="imageURL" value={this.state.imageURL} onChange={this.getUrl} /><br /><br />
                            <label>Product ID:</label>
                            <input type="text" value={this.state.id} readOnly /><br /><br />
                            <label>Product Name:</label>
                            <input type="text" id="name" value={this.state.name} onChange={this.getName} /><br /><br />
                            <label>Brand:</label>
                            <input type="text" id="brand" value={this.state.brand} onChange={this.getBrand} /><br /><br />
                            <label>Description:</label>
                            <input type="text" id="description" value={this.state.description} onChange={this.getDescription} /><br /><br />
                            <label>Category:</label>
                            <input type="text" id="category" value={this.state.category} onChange={this.getCategory} /><br /><br />
                            <label>Price:</label>
                            <input type="text" id="price" value={this.state.price} onChange={this.getPrice} /><br /><br />
                            <label>Stock:</label>
                            <input type="text" id="stock" value={this.state.stock} onChange={this.getStock} /><br /><br />
                        </div>
                        <button onClick={this.updateProduct}>Update</button>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default UpdateProduct;