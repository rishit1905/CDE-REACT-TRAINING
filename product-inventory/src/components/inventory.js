import React from 'react';

class Inventory extends React.Component {
    state = {}
    render() {
        return (
            <span>
                <header>
                    <div class="element">
                        <p>INVENTORY</p>
                    </div>
                    <div class="tables">
                        <table id="menu">
                            <tr>
                                <td><input type="search" placeholder="Search" /></td>
                                <td>
                                    <p>Welcome User</p>
                                </td>
                                <td><img class="profile" src="./image/profile-icon-9.png" alt="./image/profile-icon-9.png" /></td>
                            </tr>
                        </table>
                    </div>
                </header>
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
                        <tbody onclick="location.href='product.html'">
                            <tr >
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

                <footer>
                    <p>Copyright &copy; Rishabh</p>
                </footer>
            </span>

        );
    }
}

export default Inventory;