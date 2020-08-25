import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import Signup from '../signup';

afterEach(cleanup)

it("Signup renders without crash",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Signup></Signup>, div)
})

it('Button renders in correct way', ()=>{
    const {getByTestId} = render(<Signup></Signup>)
    expect(getByTestId('signup')).toHaveTextContent('Create Account')
})