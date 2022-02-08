import { combineReducers } from 'redux';
import { Productreducer,selectedProductReducer, addtocartReducer, removefromcartReducer } from './Productreducer';

const reducers = combineReducers({
    allproduct: Productreducer,
    selectedProduct: selectedProductReducer,
    cart: addtocartReducer
});

export default reducers;