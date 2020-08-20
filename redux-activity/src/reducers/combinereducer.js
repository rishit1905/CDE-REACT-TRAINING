import {combineReducers} from 'redux';
import productClickedReducer from './productclickedreducer';
import allProductReducer from './allproductreducer';
import editClickedReducer from './editclickedreducer';

const allReducers=combineReducers({
    allProductReducer:allProductReducer,
    productClicked:productClickedReducer,
    editClicked:editClickedReducer
});

export default allReducers