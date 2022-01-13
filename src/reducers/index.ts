import { combineReducers } from 'redux';
import { DialogReducer } from './DialogReducer';
import { TaskReducer } from './TaskReducer';
import { UserReducer } from './UserReducer';


export const Reducers = combineReducers({
    task:TaskReducer,
    dialog:DialogReducer,
    user:UserReducer
})