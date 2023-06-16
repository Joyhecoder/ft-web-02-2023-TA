//actions and reducers

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    contacts: []
}

const FETCH_CONTACTS = "FETCH_CONTACTS"
// const contactDataThunk = createAsyncThunk('action-type', cb)
export const contactDataThunk = createAsyncThunk(FETCH_CONTACTS, async (params, thunkAPI) =>{
    const results = await fetch('https://jsonplaceholder.typicode.com/users')
    return results.json()
})


//action-type/pending
//action-type/fullfilled

let contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        //all our reducers
        increment(state){
            state++
        }
        
    },
    extraReducers: {
        [contactDataThunk.pending] : (state, action)=>{
            state.isLoading = true
        },
        [contactDataThunk.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.contacts = payload
        },
        
        [contactDataThunk.rejected]: (state, {payload}) => {
                state.isLoading = false;
                state.error = "couldn't fetch data"
            }
        
    }
})

export const {increment} = contactSlice.actions
export default contactSlice.reducer