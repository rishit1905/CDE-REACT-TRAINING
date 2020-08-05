import React from 'react';

class Product extends React.Component {
    state = {}
    render() {
        return (
            <span>
                <header>
                    <div class="element">
                        <p>PRODUCT DETAILS</p>
                    </div>
                    <div class="tables">
                        <table>
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
                    <div class="product">
                    </div>
                </div>


                <footer>
                    <p>Copyright &copy; Rishabh</p>
                </footer>
            </span>
        );
    }
}

export default Product;