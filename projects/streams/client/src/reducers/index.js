import { combineReducers } from 'redux';
// import { reducer } from 'redux-form';
// For sanity check, you can rename export reducer.  Reducer is the exact name
// name of the export, but very general.  The following example shows how to rename
// an export 
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  // redux-form reducer MUST be wired to key of `form`
  form: formReducer,
  streams: streamReducer
});
