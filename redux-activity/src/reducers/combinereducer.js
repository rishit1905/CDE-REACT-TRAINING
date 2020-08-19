import {combineReducers} from 'redux';
import ProductReducer from './allproductreducer';
import productClickedReducer from './productclickedreducer';

const allReducers=combineReducers({
    allProductReducer:ProductReducer,
    productClicked:productClickedReducer
});

export default allReducers