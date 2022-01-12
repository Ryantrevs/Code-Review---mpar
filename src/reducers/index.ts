import { combineReducers } from 'redux';
import { TaskReducer } from './TaskReducer';


export const Reducers = combineReducers({
    task:TaskReducer
})