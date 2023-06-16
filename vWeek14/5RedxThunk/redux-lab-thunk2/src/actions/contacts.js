
import {LOAD_CONTACTS, ERROR} from './types'

// https://jsonplaceholder.typicode.com/users
//!cb function is defined in the Contacts.js
const loadContactData = (cb) => async (dispatch, getState)=> {
    try {
        //initially dataFetch is false, so !getState means when it is true
        if(!getState().contacts.dataFetched){
            let results = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await results.json()
            dispatch({type: LOAD_CONTACTS, data: data})
        }

        cb()
       
    } catch (error) {
        console.log(error.message)
        dispatch({type: ERROR, data: error.message})
    }
    
}
export default loadContactData