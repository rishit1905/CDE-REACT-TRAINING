import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Inventory from '../inventory';


afterEach(cleanup)

it("Inventory renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Inventory></Inventory>, div)
})

it('Button renders in correct way', ()=>{
    const {getByTestId} = render(<Inventory></Inventory>)
    expect(getByTestId('inventorybutton')).toHaveTextContent('Add Product')
})