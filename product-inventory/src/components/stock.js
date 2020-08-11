import React from 'react';
import "./headerfooter.css";
import axios from "axios";
import ProductDetail from './productdetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            filteredProducts: [],
            deleted: false,
            pid: 0,
            searchValue: ""
        }
    }

    initializeState = () => {
        setTimeout(() => {
            this.setState({ deleted: false })
        }, 3000)
    }
    UNSAFE_componentWillMount() {
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
                this.setState({ deleted: true })
                this.getAllProducts()
                this.initializeState()
            }, error => {
                console.log(error)
            })
    }

    goToAddProduct = () => {
        this.props.history.push("/addproduct")
    }

    updCurrentId = (id) => {
        this.setState({ pid: id })
        this.props.history.push({
            pathname: "/updateproduct",
            state: { pid: id }
        })
    }

    searchProduct = (event) => {
        let searchV = event.target.value
        if (searchV === "") {
            this.getAllProducts()
        }
        this.setState({ searchValue: searchV })
        console.log(searchV)
        let searchF = this.state.products.filter(f => {
            return f.name.toLowerCase().startsWith(searchV.trim().toLowerCase())
        })
        this.setState({ filteredProducts: searchF })
        console.log(searchF)
    }

    renderAllProducts = () => {
        if (this.state.searchValue !== "") {
            if (this.state.filteredProducts.length === 0) {
                return toast("Sorry ! No Such Product Found !")
            }
            else {
                return this.state.filteredProducts.map(product => {
                    return (
                        <ProductDetail
                            key={product.id}
                            imageURL={product.imageURL}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            description={product.description}
                            category={product.category}
                            price={product.price}
                            stock={product.stock}
                            delete={this.deleteCurrentId}
                            update={this.updCurrentId}
                        ></ProductDetail>
                    )
                })
            }
        }
        else {
            return this.state.products.map(product => {
                return (
                    <ProductDetail
                        key={product.id}
                        imageURL={product.imageURL}
                        id={product.id}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        stock={product.stock}
                        delete={this.deleteCurrentId}
                        update={this.updCurrentId}
                    ></ProductDetail>
                )
            })
        }

    }

    render() {
        let searchstyle = {
            width: "96%",
            display: "block",
            margin: "1rem 2.1rem 0 0",
            background: "white",
        }
        return (
            <div className="row">
                <input type="search" placeholder="Search" value={this.state.searchValue} onChange={this.searchProduct} style={searchstyle} />
                <ToastContainer autoClose={2250} />
                <table id="product">
                    <tbody>
                        {this.renderAllProducts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Stock;