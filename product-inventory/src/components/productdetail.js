import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updCurrentProduct = () => {
        console.log("Update product with id: " + this.props.id);
        this.props.update(this.props.id)
    }

    delCurrentProduct = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui">
                        <h1>Are you sure ?</h1>
                        <p>You want to delete this product?</p>
                        <button onClick={onClose}>No</button>
                        &nbsp;
                        <button onClick={() => {
                            console.log("delete product with id: " + this.props.id)
                            this.props.delete(this.props.id)
                            onClose()
                        }}>Yes, Delete It</button>
                    </div>
                )
            }
        })

    }
    render() {
        let imgStyle = {
            width: '80px',
            height: '80px',
            padding: '5px',
            borderRadius: '50%',
            background: 'white'
        }
        return (
            <tr>
                <td><img src={this.props.imageURL} alt="Unavailabe" style={imgStyle}></img></td>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.brand}</td>
                <td>{this.props.description}</td>
                <td>{this.props.category}</td>
                <td>{this.props.price}</td>
                <td>{this.props.stock}</td>
                <td><button onClick={this.updCurrentProduct}>Update</button></td>
                <td><button onClick={this.delCurrentProduct}>Delete</button></td>
            </tr>
        );
    }
}

export default ProductDetail;