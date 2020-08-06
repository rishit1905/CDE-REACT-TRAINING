import React from 'react';
// import "./inventory.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './productdetail';

class Inventory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            deleted: false
        }
    }

    initializeState=()=>{
        setTimeout(()=>{
            this.setState({deleted:false})
        }, 3000)
    }
    componentWillMount() {
        console.log("Component Mounting")
        this.getAllProducts()
    }

    componentDidMount() {
        console.log(this.props)
    }

    getAllProducts = () => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({ products: response.data })
                console.log("Components loaded")
            }, error => {
                console.log(error)
            })
    }

    deleteCurrentId = (id) => {
        console.log("Delete product with received id: " + id)
        axios.delete("http://localhost:3000/products/" + id)
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({deleted:true})
                this.getAllProducts()
                this.initializeState()
             }, error => { 
                 console.log(error)
             })
    }

    renderAllProducts = () => {
        return this.state.products.map(product => {
            return (
                <ProductDetail
                    key={product.id}
                    thumbnailUrl={product.thumbnailUrl}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                    category={product.category}
                    price={product.price}
                    stock={product.stock}
                    delete={this.deleteCurrentId}
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