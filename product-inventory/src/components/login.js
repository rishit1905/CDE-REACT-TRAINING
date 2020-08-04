import React from 'react';
import Signup from './signup';
import HeaderFooter from './headerfooter';

class Login extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Login is fun
                <Signup></Signup>
                <HeaderFooter></HeaderFooter>
            </div>
         );
    }
}
 
export default Login;