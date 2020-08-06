import React from 'react';
import "./headerfooter.css";

class HeaderFooter extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <header>
                    <div class="element">
                        <p>DASHBOARD</p>
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
                <footer>
                    <p>Copyright &copy; Rishabh</p>
                </footer>
            </div>

        );
    }
}

export default HeaderFooter;