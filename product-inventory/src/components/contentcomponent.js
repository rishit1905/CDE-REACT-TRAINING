import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Inventory from './inventory';
import WelcomeUser from './welcomeuser';
import ViewProfile from './viewprofile';
import AccountSettings from './accountsettings';
import ProfileImage from './profileimage';
import Search from './Search';
import Featuring from './featuring';
import Category from './category';
import SubCategory from './subcategory';
import MonthlyStatistics from './monthlystatistics';
import Vendor from './vendor';
import InventoryManagement from './inventorymanagement';
import Product from './product';
import AddProduct from './addproduct';
import ProductDescription from './productdescription';
import Update from './update';
import Delete from './delete';
import Login from './login';
import Signup from './signup';

class ContentComponent extends React.Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <Route path="/welcomeuser" exact component={WelcomeUser}></Route>
                <Route path="/signout" exact component={Dashboard}></Route>
                <Route path="/viewprofile" exact component={ViewProfile}></Route>
                <Route path="/accountsettings" exact component={AccountSettings}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Route path="/featuring" exact component={Featuring}></Route>
                <Route path="/category" exact component={Category}></Route>
                <Route path="/subcategory" exact component={SubCategory}></Route>
                <Route path="/monthlystatistics" exact component={MonthlyStatistics}></Route>
                <Route path="/vendor" exact component={Vendor}></Route>
                <Route path="/inventorymanagement" exact component={InventoryManagement}></Route>
                <Route path="/inventory" exact component={Inventory}></Route>
                <Route path="/product" exact component={Product}></Route>
                <Route path="/addproduct" exact component={AddProduct}></Route>
                <Route path="/productdescription" exact component={ProductDescription}></Route>
                <Route path="/update" exact component={Update}></Route>
                <Route path="/delete" exact component={Delete}></Route>
            </Switch>

        );
    }
}

export default ContentComponent;