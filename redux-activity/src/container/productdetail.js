import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from "../action/deleteproductbroadcast";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class ProductDetail extends React.Component {

    allProducts = () => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                this.props.delete(response.data)
            }, error => {
                console.log(error)
            })
    }

    deleteProduct = () => {
        axios.delete("http://localhost:3000/products/" + this.props.product.id)
            .then(response => {
                console.log(response);
                console.log("Product with id: " + this.props.product.id + " and name: " + this.props.product.name + " deleted")
                this.allProducts()
            }, error => { console.log(error) })
    }

    editProduct = (e) => {
        e.preventDefault()
        this.props.history.push("/editproduct")
    }

    render() {
        if (this.props.product === null) {
            return (
                <div>
                    <h2>No products..</h2>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Product Detail:</h2>
                    &nbsp;&nbsp;<b>ID:</b>{this.props.product.id}<br></br>
                    &nbsp;&nbsp;<b>Name:</b> {this.props.product.name}<br></br>
                    &nbsp;&nbsp;<b>Category:</b> {this.props.product.category}<br></br>
                    &nbsp;&nbsp;<b>Price:</b> {this.props.product.price}<br></br>
                    &nbsp;&nbsp;<b>Quantity:</b> {this.props.product.quantity}<br></br>
                    &nbsp;&nbsp;<b>Stock Available:</b> {this.props.product.stock}<br></br><br></br>
                    &nbsp;&nbsp;<button onClick={this.editProduct}>Edit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.deleteProduct}>Delete</button>
                </div>
            );
        }

    }
}

function convertStoreToProps(store) {
    console.log("Product detail received from store")
    console.log(store)
    return {
        product: store.productClicked
    }
}

function eventDispatch(dispatch) {
    return bindActionCreators({
        delete: deleteProductBroadcast
    }, dispatch)
}

export default withRouter(connect(convertStoreToProps, eventDispatch)(ProductDetail));