import TaskListOptions from "../models/task_list_options";



const initialState = new TaskListOptions();

export const TaskReducer = (state:TaskListOptions = initialState,action:any) => {
    switch(action.type){
        case 'get-all-task':
            return {...state,ListTask:action.payload.content,paginationArray:action.payload.pagination,size:action.payload.size,pagination:action.payload.actualPage};
        case 'add-task':
            console.log("entrou aqui")
            return {...state,ListTask:[...state.ListTask,action.payload]};
        case 'ModalADD':
            return {...state,ShowAddModal:action.payload.showModal,EditTask:action.payload.taskChange};
        case 'rm-task':
            let arrayTemp = state.ListTask.filter(function(element:any,index,arr){
                return element.ID != action.payload;
            });

            return {...state,ListTask:arrayTemp};
        case 'edit-task':
            let listElement = state.ListTask.map((element,index)=>{
                if(element.ID == action.payload.ID)
                    return action.payload;
                else
                    return element;
            });

            return {...state,ListTask:listElement,EditTask:undefined,ShowAddModal:false};

        default:
            return state;
    }
}