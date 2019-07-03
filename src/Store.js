import {createStore,combineReducers} from 'redux';
// import {} from 'redux';
import ProductListReducer from './component/ProductList/ProductList.reducer';
import ProductDetailReducer from './component/ProductDeatail/ProductDetail.reducer';
import RegisterFormReducer from './component/RegisterForm/RegisterForm.reducer';
import LoginReducer from './component/LoginForm/Login.reducer';

const combinedProduct = combineReducers({ProductListReducer,ProductDetailReducer,RegisterFormReduce,LoginReducer,RegisterFormReducer});
const store = createStore(combinedProduct);