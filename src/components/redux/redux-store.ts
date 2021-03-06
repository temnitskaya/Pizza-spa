import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./products-reducer";
import promoReducer from "./promo-reducer";
import thunkMiddleware from "redux-thunk";
import basketReducer from "./basket-reducer";


let reducers = combineReducers({
  productPage : productReducer,
  promoPage : promoReducer,
  basketPage : basketReducer
})

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export default store;