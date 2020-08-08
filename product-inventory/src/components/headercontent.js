import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductInventoryHead from './productinventoryhead';
import DashboardHead from './dashboardhead';
import InventoryHead from './inventoryhead';
import AddProductHead from './addproducthead';
import UpdateProductHead from './updateproducthead';

class HeaderContent extends React.Component {
    state = {}
    render() {
        return (  
            <Switch>
                <Route path="/" exact component={ProductInventoryHead}></Route>
                <Route path="/signup" exact component={ProductInventoryHead}></Route>
                <Route path="/dashboard" exact component={DashboardHead}></Route>
                <Route path="/inventory" exact component={InventoryHead}></Route>
                <Route path="/addproduct" exact component={AddProductHead}></Route>
                <Route path="/updateproduct" exact component={UpdateProductHead}></Route>
            </Switch>
        );
    }
}

export default HeaderContent;