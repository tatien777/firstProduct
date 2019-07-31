import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './RegisterForm.action'


const instialState = {
    result: null,
    load: false,
    fail: null
}
export default function RegisterReducer(state=instialState,action){
    switch(action.type){
        case REGISTER_FAILURE:
            return Object.assign({},state,{
                load:true
            })
   
        case REGISTER_REQUEST:
            return Object.assign({},state,{
            load: false,
            result: action.payload
        })
        case REGISTER_SUCCESS:
            return Object.assign({},state,{
            load: false,
            result: action.error
        })
        default:
            return state
    }
}


