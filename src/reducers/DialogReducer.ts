import DialogModel from "../models/dialog.model";

const initialState = new DialogModel();

export const DialogReducer = (state:DialogModel = initialState,action:any) => {
    switch(action.type){
        case 'new-message':
            return {...state,title:action.payload.title, subText:action.payload.message, showDialog:action.payload.showDialog};
        default:
            return state;
    }
}