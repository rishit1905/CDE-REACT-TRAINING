import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productClickedBroadcast from "../action/productclickedbroadcast";
import axios from "axios"
import displayProductBroadcast from '../action/displayproductbroadcast';

class ProductList extends React.Component {
    componentWillMount() {
        console.log("Mounting all products");
        this.allProducts()
    }

    componentDidMount(){
        console.log(this.props)
    }

    allProducts() {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                this.props.sendAllProduct(response.data)
        }, error => {
                console.log(error)
            })
    }

    getAllProducts = () => {
        console.log("Received props from store")
        return this.props.products.map(p => {
            return (
                <li key={p.id} onClick={() => { this.props.clickedProduct(p) }}>
                    {p.name}<br></br>
                </li>
            )
        })

    }

    render() {
        if(this.props.products.length === 0){
            return ( 
                <div><h2>All products will be displayed here!!</h2></div>
             );
        }
        return (
            <div>
                <h2>Product List:</h2>
                <ol>
                    {this.getAllProducts()}
                </ol>
            </div>
        );
    }
}

function convertStoreToProps(store) {
    console.log("Received complete store")
    console.log(store)
    return {
        products: store.allProductReducer
    }
}

function convertEventToProps(dispatch) {
    return bindActionCreators({
        clickedProduct: productClickedBroadcast,
        sendAllProduct: displayProductBroadcast
    }, dispatch)
}

export default connect(convertStoreToProps, convertEventToProps)(ProductList);