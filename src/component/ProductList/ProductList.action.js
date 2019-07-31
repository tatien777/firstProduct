const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCT_LIST_SUCCESS=  'PRODUCT_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'
// action creator
function ProductListRequestAction() {
    return{
        type: PRODUCT_LIST_REQUEST
    }
}

function ProductListSucessAction(result) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: result
    }
}

function ProductListFailAction(error) {
    return {
        type: PRODUCT_LIST_FAIL,
        error
    }
}