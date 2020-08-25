import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import AddProduct from '../addproduct';
import Inventory from '../inventory';

afterEach(cleanup)

it("add product renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<AddProduct></AddProduct>, div)
})

it('Button renders in correct way', ()=>{
    const {getByTestId} = render(<AddProduct></AddProduct>)
    expect(getByTestId('addbutton')).toHaveTextContent('Add')
})