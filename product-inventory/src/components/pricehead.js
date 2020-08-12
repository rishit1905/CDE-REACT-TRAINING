import React from 'react';
import { Link } from 'react-router-dom';

class PriceHead extends React.Component {
    state = {}
    render() {
        return (
            <header>
                <div className="element">
                    <p>PRICE BASED</p>
                </div>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/dashboard">
                                        <button className="headerButton">Dashboard</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/inventory">
                                        <button className="headerButton">Inventory</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/">
                                        <button className="headerButton">Signout</button>
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

export default PriceHead;