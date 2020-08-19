import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from "../action/deleteProductBroadcast"

class ProductDetail extends React.Component {

    deleteProduct=()=>{
        this.props.delete(this.props.product)
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
                    &nbsp;&nbsp;<b>Name:</b> {this.props.product.name}<br></br>
                    &nbsp;&nbsp;<b>Category:</b> {this.props.product.category}<br></br>
                    &nbsp;&nbsp;<b>Price:</b> {this.props.product.price}<br></br>
                    &nbsp;&nbsp;<b>Quantity:</b> {this.props.product.quantity}<br></br>
                    &nbsp;&nbsp;<b>Stock Available:</b> {this.props.product.stock}<br></br><br></br>
                    &nbsp;&nbsp;<button>Edit</button>
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

function eventDispatch(dispatch){
    return bindActionCreators({
        delete:deleteProductBroadcast
    },dispatch)
}

export default connect(convertStoreToProps, eventDispatch)(ProductDetail);