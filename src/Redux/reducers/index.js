import { combineReducers } from 'redux';
import { Productreducer,selectedProductReducer } from './Productreducer';

const reducers = combineReducers({
    allproduct: Productreducer,
    selectedProduct: selectedProductReducer
});

export default reducers;