import React from 'react';
import Signup from './signup';
import HeaderFooter from './headerfooter';

class Login extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Signup></Signup>
                <HeaderFooter></HeaderFooter>
            </div>
         );
    }
}
 
export default Login;