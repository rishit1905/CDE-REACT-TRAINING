import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Vendor from '../vendor';


afterEach(cleanup)

it("Vendor renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Vendor></Vendor>, div)
})