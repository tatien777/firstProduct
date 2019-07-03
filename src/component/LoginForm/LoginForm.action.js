const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS =  'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
// action creator
function loginRequestAction() {
    return{
        type: LOGIN_REQUEST
    }
}

function loginSucessAction(result) {
    return {
        type: LOGIN_SUCCESS,
        payload: result
    }
}

function loginSucessAction(error) {
    return {
        type: LOGIN_FAIL,
        error
    }
}