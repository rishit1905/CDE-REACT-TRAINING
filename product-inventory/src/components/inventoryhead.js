import React from 'react';
import "./headerfooter.css";
import { Link } from 'react-router-dom';

class InventoryHead extends React.Component {
    state = {}
    render() {
        return (
            <header>
                <div className="element">
                    <p>INVENTORY</p>
                </div>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/">
                                        <button className="headerButton">Signout</button>
                                    </Link>
                                </td>
                                <td><img className="profile" src="./image/profile-icon-9.png" alt=""/></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </header>
        );
    }
}

export default InventoryHead;