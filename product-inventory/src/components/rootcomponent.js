import React from 'react';
import Login from './login';
import { Switch, Route } from 'react-router-dom';
import Signup from './signup';
import HeaderFooter from './headerfooter';
import ContentComponent from './contentcomponent';

class RootComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <HeaderFooter></HeaderFooter>
                <ContentComponent></ContentComponent>
            </div>

        );
    }
}

export default RootComponent;