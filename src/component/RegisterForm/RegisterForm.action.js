const REGISTER_REQUEST = 'REGISTER_REQUEST'
const REGISTER_SUCCESS =  'REGISTER_SUCCESS'
const REGISTER_FAIL = 'REGISTER_FAIL'
// action creator
function registerRequestAction() {
    return{
        type: REGISTER_REQUEST
    }
}

function registerucessAction(result) {
    return {
        type: REGISTER_REQUEST,
        payload: result
    }
}

function registerSucessAction(error) {
    return {
        type: REGISTER_FAIL,
        error
    }
}