
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './LoginForm.action'

const instialState = {
    result: null,
    loading: false,
    fail: null
}
export default function LoginReducer(state = instialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,

            }

        case LOGIN_SUCCESS:
            //     return Object.assign({},stae,{
            //     loading: false,
            //     result: action.payloading
            // })
            return {
                ...state,
                loading: false,
                result: action.payload
            }
        case LOGIN_FAIL:
            //     return Object.assign({},stae,{
            //     loading: false,
            //     result: action.error
            // })
            return {
                ...state,
                loading: false,
                result: action.payload
            }
        default:
            return state
    }
}