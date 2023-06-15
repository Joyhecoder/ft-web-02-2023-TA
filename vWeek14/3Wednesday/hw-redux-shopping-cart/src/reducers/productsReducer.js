import {LOAD_PRODUCTS} from '../actions/types'

const productReducer = (state, action) => {
    if( state === undefined){
        state = {
            products: []
        }
    }

    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.product
            }
    
        default:
            return state
    }
    return state 
}

export default productReducer