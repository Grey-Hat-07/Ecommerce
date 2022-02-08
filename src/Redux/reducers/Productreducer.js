import { Actiontype } from "../contents/Actiontype";

const initialState = {
  products: [],
};
const cart = {
  products: [],
};
export const Productreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontype.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontype.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};
export const addtocartReducer = (state = cart, { type, payload }) => {
  switch (type) {
    case Actiontype.ADD_TO_CART:
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};
export const removefromcartReducer = (state = cart, { type, payload }) => {
  switch (type) {
    case Actiontype.REMOVE_CART_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
}
