import React from 'react';
import AddProduct from './container/addproduct';
import ProductList from './container/productlist';
import ProductDetail from './container/productdetail';

const App = () => (
    <div>
        <AddProduct />
        <hr/>
        <ProductList />
        <hr />
        <ProductDetail />
    </div>
);

export default App