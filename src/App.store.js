import { createStore, combineReducers, applyMiddleware } from "redux";
import RegisterReducer from "./component/RegisterForm/RegisterForm.reducer";
import LoginReducer from "./component/LoginForm/LoginForm.reducer";
import ProductListReducer from "./component/ProductList/ProductList.reducer";
import ProductDetailReducer from "./component/ProductDetail/ProductDetail.reducer";
import thunk from 'redux-thunk';


// const combinedReducer = combineReducers({
//   RegisterReducer,
//   LoginReducer,
//   ProductDetailReducer,
//   ProductListReducer
// });


export const store = createStore(
  combineReducers({
    RegisterReducer,
    LoginReducer,
    ProductDetailReducer,
    ProductListReducer
  }),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ,
  applyMiddleware(thunk)
  );
