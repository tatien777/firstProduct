const instialState = {
    result: null,
    load: false,
    fail: null
}
export default function RegisterReducer(state=instialState,action){
    switch(action,type){
        case GET_PRODUCTS_REQUEST:
            return Object.assign({},state,{
                load:false,
                result:action.payload
            })
   
        case GET_PRODUCTS_SUCCESS:
            return Object.assign({},stae,{
            load: false,
            result: action.payload
        })
        case GET_PRODUCTS_FAIL:
            return Object.assign({},stae,{
            load: false,
            result: action.error
        })
        default:
            return state
    }
}