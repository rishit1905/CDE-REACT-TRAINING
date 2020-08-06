import React from 'react';

class ProductDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.thumbnailUrl}</td>
                <td>{this.props.productId}</td>
                <td>{this.props.name}</td>
                <td>{this.props.brand}</td>
                <td>{this.props.description}</td>
                <td>{this.props.category}</td>
                <td>{this.props.price}</td>
                <td>{this.props.stock}</td>
            </tr>
        );
    }
}

export default ProductDetail;