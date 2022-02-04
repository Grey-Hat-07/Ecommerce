import { Actiontype } from "../contents/Actiontype";

const initialState = {
    products: [],
}
export const Productreducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case Actiontype.SET_PRODUCTS:
            return {...state, products: payload}
    
        default:
            return state;
    }
}