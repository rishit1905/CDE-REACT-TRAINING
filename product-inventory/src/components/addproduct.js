import React from 'react';
import "./addproduct.css";
import axios from "axios";

class AddProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thumbnailUrl:"",
            name:"",
            brand:"",
            description:"",
            category:"",
            price:0,
            stock:0,
            buttonStatus:false
        }
    }

    getUrl=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({thumbnailUrl:event.target.value})

    }
    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name:event.target.value})

    }
    getBrand=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({brand:event.target.value})

    }
    getDescription=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({description:event.target.value})

    }
    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category:event.target.value})

    }
    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price:event.target.value})

    }
    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock:event.target.value})

    }

    addProduct=()=>{
        console.log("Adding friend..")
        let productRequestBody={
            "thumbnailUrl":this.state.thumbnailUrl,
            "name":this.state.name,
            "brand":this.state.brand,
            "description":this.state.description,
            "category":this.state.category,
            "price":this.state.price,
            "stock":this.state.stock,
        }
        axios.post("http://localhost:3000/products",productRequestBody)
        .then(response=>{
            console.log(response)
            console.log("Dne")
            this.props.history.push("/inventory")
        },error=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div class="row">
                <form>
                    <fieldset>
                        <legend>ADD PRODUCT</legend>
                        <div class="columns">
                            <label>Thumbnail URL:</label>
                            <input type="text" id="thumbnailUrl" onChange={this.getUrl} /><br /><br />
                            <label>Product Name:</label>
                            <input type="text" id="name" onChange={this.getName}/><br /><br />
                            <label>Brand:</label>
                            <input type="text" id="brand" onChange={this.getBrand}/><br /><br />
                            <label>Description:</label>
                            <input type="text" id="description" onChange={this.getDescription}/><br /><br />
                            <label>Category:</label>
                            <input type="text" id="category" onChange={this.getCategory}/><br /><br />
                            <label>Price:</label>
                            <input type="text" id="price" onChange={this.getPrice}/><br /><br />
                            <label>Stock:</label>
                            <input type="text" id="stock" onChange={this.getStock}/><br /><br />
                        </div>
                        <button onClick={this.addProduct} disabled={this.state.buttonStatus}>Add</button>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default AddProduct;