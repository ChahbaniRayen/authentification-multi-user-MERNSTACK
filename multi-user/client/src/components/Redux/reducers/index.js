import authReducer from './authReducer'; 
import { combineReducers } from '@reduxjs/toolkit';
import errorsReducer from './errorsReducer'; 
import profileReducer from './profileReducer'; 

const rootReducer = combineReducers({
    errors: errorsReducer,
    auth:authReducer, 
    profiles:profileReducer,   
});

export default rootReducer;

