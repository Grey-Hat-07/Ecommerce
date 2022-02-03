import { combineReducers } from 'redux';
import { Productreducer } from './Productreducer';

const reducers = combineReducers({
    allproduct: Productreducer
});