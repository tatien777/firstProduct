const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST'
const PRODUCT_DETAIL_SUCCESS =  'PRODUCT_DETAIL_SUCCESS'
const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL'
// action creator
function deatailRequestAction() {
    return{
        type: PRODUCT_DETAIL_REQUEST
    }
}

function detailSucessAction(result) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        payload: result
    }
}

function detailSucessAction(error) {
    return {
        type: PRODUCT_DETAIL_FAIL,
        error
    }
}