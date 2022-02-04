import { Actiontype } from "../contents/Actiontype";

const initialState = {
    products: [{
        id: 1,
        name: "Product 1",
        category: "Category 1",
    }]
}
export const Productreducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case Actiontype.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}