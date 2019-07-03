const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCT_LIST_SUCCESS=  'PRODUCT_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'
// action creator
function loginRequestAction() {
    return{
        type: PRODUCT_LIST_REQUEST
    }
}

function loginSucessAction(result) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: result
    }
}

function loginSucessAction(error) {
    return {
        type: PRODUCT_LIST_FAIL,
        error
    }
}