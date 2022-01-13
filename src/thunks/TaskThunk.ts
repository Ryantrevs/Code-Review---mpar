import { AddTaskAction, EditTaskAction, GetAllTask, RemoveTaskAction, SearchTaskAction } from "../actions/task.action"
import TaskModel from "../models/task.model";
import { GetTask, AddTask, RemoveTask, EditTaskService, GetContentLenght, GetFilteredContent } from "../services/task.service"

export const TaskThunk = {
    GetAllTask: (indexInitial:number,userId:number) => (dispatch) => {
        GetTask(userId)
            .then((response)=>{
                const size = Math.ceil(response.length/5);
                let array_tmp = new Array<number>();
                if(indexInitial<=0){
                    for(let i=indexInitial;i-4 || i<size;i++)
                        if(i>1)
                            array_tmp.push(i);
                }
                else if(indexInitial-1>=2 && indexInitial+1<=size){
                    console.log("entrou no meio")
                    for(let i=indexInitial-1;i<indexInitial+1;i++)
                        array_tmp.push(i);
                }
                else{
                    console.log("entrou no ultimo")
                    for(let i=size;i>=3 || i>1;i--)
                        array_tmp.unshift(i);
                }
                return dispatch(GetAllTask(response,array_tmp,size/5,indexInitial,response.slice(indexInitial*5,(indexInitial*5)+5)));
        })},
    AddTaskThunk: (task:TaskModel) => (dispatch) => {
        console.log("asbdkjbaskdkjsab")
        AddTask(task).then((value)=>{
            dispatch(AddTaskAction(value));
        });
    },
    DeleteTask: (id:number) => (dispatch) =>{
        RemoveTask(id).then(()=>{
            dispatch(RemoveTaskAction(id));
        })
    },
    EditTask: (task:TaskModel) => (dispatch) => {
        EditTaskService(task).then(()=>{
            dispatch(EditTaskAction(task));
        })
    },


}