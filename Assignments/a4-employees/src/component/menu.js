import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="/">Home</Link>
                &nbsp;
                &nbsp;
                <Link to="/about">About</Link>
                &nbsp;
                &nbsp;
                <Link to="/lifecycle">Lifecycle</Link>
            </div>
         );
    }
}
 
export default Menu;