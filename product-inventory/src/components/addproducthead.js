import React from 'react';
import "./headerfooter.css";
import { Link } from 'react-router-dom';

class AddProductHead extends React.Component {
    state = {}
    render() {
        return (
            <header>
                <div className="element">
                    <p>ADD PRODUCT</p>
                </div>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/inventory">
                                        <button class="headerButton">Inventory</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/">
                                        <button class="headerButton">Signout</button>
                                    </Link>
                                </td>
                                <td><img className="profile" src="./image/profile-icon-9.png" alt="" /></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </header>
        );
    }
}

export default AddProductHead;