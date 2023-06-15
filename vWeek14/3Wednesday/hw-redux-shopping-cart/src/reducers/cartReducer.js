const cartReducer = (state, action) => {
    if (state === undefined){
        state = {
            cartItems: []
        }
    }

    return state
}

export default cartReducer