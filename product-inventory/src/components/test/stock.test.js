import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Stock from '../stock';

afterEach(cleanup)

it("Stock renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Stock></Stock>, div)
})