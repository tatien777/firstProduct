import * as firebase from 'firebase';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS =  'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
// action creator
export function loginRequestAction() {
    return{
        type: LOGIN_REQUEST
    }
}

export function loginSucessAction(result) {
    return {
        type: LOGIN_SUCCESS,
        payload: result
    }
}

export function loginFailAction(error) {
    return {
        type: LOGIN_FAIL,
        error
    }
}

export function login(email, password) {
    return async(dispatch) => {
        dispatch(loginRequestAction())
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(loginSucessAction(result))

        } catch (error) {
            dispatch(loginFailAction(error.message))
        }

    }
}

