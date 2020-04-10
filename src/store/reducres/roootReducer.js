import authReducer from './authReducer'
import posthReducer from './postReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    
    auth:authReducer,
    post:posthReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
   
})

export default rootReducer