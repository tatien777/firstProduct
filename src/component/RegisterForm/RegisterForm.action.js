import * as firebase from 'firebase';

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS =  'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAIL'

// action creator
export function registerRequestAction() {
    return{
        type: REGISTER_REQUEST
    }
}

export function registerSucessAction(result) {
    return {
        type: REGISTER_SUCCESS,
        payload: result
    }
}

export function registerFailAction(error) {
    return {
        type: REGISTER_FAILURE,
        error
    }
}

export function register(email, password) {
    return async(dispatch) => {
        dispatch(registerRequestAction())
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log("register.action", result)
            dispatch(registerSucessAction(result))
        } catch (error) {
            dispatch(registerFailAction(error.message))
            console.log(error.message,"error.message")
        }
    }
}