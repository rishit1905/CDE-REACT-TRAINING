import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Lifecycle from './lifecycle';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/lifecycle" component={Lifecycle}></Route>
            </Switch>
         );
    }
}
 
export default Content;