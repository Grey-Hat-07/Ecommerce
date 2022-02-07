import { Actiontype } from "../contents/Actiontype"
export const setproducts = (products) => {
    return {
        type: Actiontype.SET_PRODUCTS,
        payload: products
    }
}
export const selectedproduct = (product) => {
    return {
        type: Actiontype.SELECTED_PRODUCT,
        payload: product
    }
}
export const addtocart = (product) => {
    return {
        type: Actiontype.ADD_TO_CART,
        payload: product
    }
}
