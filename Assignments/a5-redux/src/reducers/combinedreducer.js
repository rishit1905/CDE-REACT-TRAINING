import {combineReducers} from 'redux';
import addFirstReducer from './addfirstreducer';
import addLastReducer from './addlastreducer';
import addScoreReducer from './addscorereducer';

const combinedreducer=combineReducers({
    addFirstName:addFirstReducer,
    addLastName:addLastReducer,
    addScore:addScoreReducer
})

export default combinedreducer