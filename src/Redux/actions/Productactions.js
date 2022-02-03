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
