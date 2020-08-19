import { combineReducers } from "redux";
import { personalDetailReducer } from "./personalDetail";
import { cartReducer } from "./cartReducer";
export let rootReducer = combineReducers({
  person: personalDetailReducer,
  cart: cartReducer,
});
