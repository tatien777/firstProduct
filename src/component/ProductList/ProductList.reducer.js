import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './ProductList.action'
const instialState = {
    result: null,
    load: false,
    fail: null
}
export default function ProductListReducer(state=instialState,action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return Object.assign({},state,{
                load:true
            })
   
        case PRODUCT_LIST_SUCCESS:
            return Object.assign({},state,{
            load: false,
            result: action.payload
        })
        case PRODUCT_LIST_FAIL:
            return Object.assign({},state,{
            load: false,
            result: action.error
        })
        default:
            return state
    }
}