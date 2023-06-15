
//1. import in RTK
import { createSlice } from '@reduxjs/toolkit'

//2. Define our action type
export const INCREMENT = "INCREMENT"; 
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_NUM = "INCREMENT_BY_NUM"; 
export const RESET = "RESET";

//3. define an inital state
const initialState = {
    count: 23
}

/**
 * 4. Slice of global state
 * 
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        increment_by_num(state, action){
            state.count += action.payload
        },
        reset(state){
            state.count = 0
        }
    }
})

export const counterActions = counterSlice.actions //creates the actions for us from the reducers

export default counterSlice.reducer;

