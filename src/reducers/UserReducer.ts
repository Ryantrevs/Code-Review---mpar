const initialState = -1;

export const UserReducer = (state=initialState,action)=> {
    switch(action.type){
        case 'reg-user':
            return state = action.payload;
        default:
            return state;
    }    
}