// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import searches from './searchReducer';
 
 
 const rootReducer=combineReducers({
     searches
 });

 export default rootReducer;