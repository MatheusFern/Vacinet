import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cadastroReducer from './cadastroReducer'
import healthReducer from './healthReducer';

export default combineReducers({
    userReducer,
    cadastroReducer,
    healthReducer
    
});