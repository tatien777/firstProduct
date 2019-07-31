import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from './ProductDetail.action'

const instialState = {
    result: null,
    load: false,
    fail: null
}
export default function ProductDetailReducer(state=instialState,action){
    switch(action.type){
        case PRODUCT_DETAIL_REQUEST:
            return Object.assign({},state,{
                load:true
            })
   
        case PRODUCT_DETAIL_SUCCESS:
            return Object.assign({},state,{
            load: false,
            result: action.payload
        })
        case PRODUCT_DETAIL_FAIL:
            return Object.assign({},state,{
            load: false,
            result: action.error
        })
        default:
            return state
    }
}