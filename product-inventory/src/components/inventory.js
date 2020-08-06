import React from 'react';
// import "./inventory.css";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ProductDetail from './productdetail';

class Inventory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        console.log("Component Mounting")
        this.getAllProducts()
    }

    componentDidMount() {
        console.log(this.props)
    }

    getAllProducts = () => {
        Axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({ products: response.data })
                console.log("Components loaded")
            }, error => {
                console.log(error)
            })
    }

    renderAllProducts = () => {
        return this.state.products.map(product => {
            return (
                <ProductDetail
                    key={product.productId}
                    thumbnailUrl={product.thumbnailUrl}
                    productId={product.productId}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                    category={product.category}
                    price={product.price}
                    stock={product.stock}
                ></ProductDetail>
            )
        })
    }

    render() {
        return (
            <span>
                <div class="row">
                    <table id="product">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Brand</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAllProducts()}
                        </tbody>
                    </table>
                </div>
            </span>

        );
    }
}

export default Inventory;