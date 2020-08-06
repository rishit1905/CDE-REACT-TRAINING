import React from 'react';
import "./inventory.css";
import { Link } from 'react-router-dom';

class Inventory extends React.Component {
    state = {}
    render() {
        return (
            <span>
                <div class="row">
                    <table id="product">
                        <thead>
                            <th>Product Name</th>
                            <th>Rating</th>
                            <th>Sub-Cateogory</th>
                            <th>Price</th>
                            <th>Qty Left</th>
                            <th>Qty Sold</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <Link to="/addproduct">
                                <tr >
                                    <td>Name</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </Link>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </span>

        );
    }
}

export default Inventory;