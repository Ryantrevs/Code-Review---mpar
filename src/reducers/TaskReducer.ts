import TaskListOptions from "../models/task_list_options";



const initialState = new TaskListOptions();

export const TaskReducer = (state:TaskListOptions = initialState,action:any) => {
    switch(action.type){
        case 'get-all-task':
            return {...state,ListTask:action.payload.content,paginationArray:action.payload.pagination,size:action.payload.size,pagination:action.payload.actualPage,ListTaskPresent:action.payload.tasksPresent};
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
            let listElement = state.ListTaskPresent.map((element,index)=>{
                if(element.ID == action.payload.ID)
                    return action.payload;
                else
                    return element;
            });

            return {...state,ListTaskPresent:listElement,EditTask:undefined,ShowAddModal:false};
        case 'SearchTask':
            let listTaskTemp = state.ListTask.filter((element)=>{
                console.log("payload",action.payload, " elemento ",element)
                if(element.Title.includes(action.payload))
                    return element;
                else if(element.Description.includes(action.payload))
                    return element;
                
            })

            console.log("lista resultado",listTaskTemp)
            return {...state,ListTaskPresent:listTaskTemp,size:0,paginationArray:new Array<number>()}
        default:
            return state;
    }
}