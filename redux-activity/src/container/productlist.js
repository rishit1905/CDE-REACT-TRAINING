import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import productClickedBroadcast from "../action/productclickedbroadcast";

class ProductList extends React.Component {
    getAllProducts=()=>{
        console.log("Received props from store")
        return this.props.products.map(p=>{
            return(
                <li key={p.id} onClick={()=>{this.props.clickedProduct(p)}}>
                 {p.name}<br></br>
                </li>
            )
        })

    }

    render() { 
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
 
function convertStoreToProps(store){
    console.log("Received complete store")
    console.log(store)
    return{
        products:store.allProductReducer
    }
}

function convertEventToProps(dispatch){
    return bindActionCreators({
        clickedProduct:productClickedBroadcast
    }, dispatch)
}

export default connect(convertStoreToProps, convertEventToProps)(ProductList);