import React from 'react';

class ProductDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    delCurrentProduct=()=>{
        console.log("delete product with id: "+this.props.id)
        this.props.delete(this.props.id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.thumbnailUrl}</td>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.brand}</td>
                <td>{this.props.description}</td>
                <td>{this.props.category}</td>
                <td>{this.props.price}</td>
                <td>{this.props.stock}</td>
                <td><button onClick={this.delCurrentProduct}>Delete</button></td>
            </tr>
        );
    }
}

export default ProductDetail;