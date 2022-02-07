import { Actiontype } from "../contents/Actiontype";

const initialState = {
    products: [],
}
const cart={
    
}
export const Productreducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case Actiontype.SET_PRODUCTS:
            return {...state, products: payload}
            break;
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {},{type, payload}) => {

    switch (type) {
        case Actiontype.SELECTED_PRODUCT:
            return {...state, selectedProduct: payload}
            break;
    
        default:
            return state;
    }
}
export const addtocartReducer = (state = cart,{type, payload}) => {
    
        switch (type) {
            case Actiontype.ADD_TO_CART:
                return {...state, cart: payload}
                break;
        
            default:
                return state;
        }
    }