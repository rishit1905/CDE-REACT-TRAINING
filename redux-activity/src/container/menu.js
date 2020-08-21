import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                &nbsp;
                <Link to='/addproduct'>Add Product</Link>
            </div>
        );
    }
}

export default Menu;