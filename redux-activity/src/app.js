import React from 'react';
import AddProduct from './container/addproduct';
import ProductList from './container/productlist';
import ProductDetail from './container/productdetail';
import EditProduct from './container/editproduct';

const App = () => (
    <div>
        <AddProduct />
        <hr />
        <ProductList />
        <hr />
        <ProductDetail />
        <hr />
        <EditProduct />
    </div>
);

export default App