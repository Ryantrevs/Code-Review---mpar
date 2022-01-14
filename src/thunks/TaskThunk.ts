import { AddTaskAction, EditTaskAction, GetAllTask, RemoveTaskAction, SearchTaskAction } from "../actions/task.action"
import TaskModel from "../models/task.model";
import { GetTask, AddTask, RemoveTask, EditTaskService, GetContentLenght, GetFilteredContent } from "../services/task.service"

export const TaskThunk = {
    GetAllTask: (indexInitial:number,userId:number) => (dispatch) => {
        GetTask(userId)
            .then((response)=>{
                const size = Math.ceil(response.length/5);
                let array_tmp = new Array<number>();
                if(indexInitial<=0 && size>1){
                    console.log("entrou no primeiro ",size, "INDEX INICIAL"+indexInitial)
                    for(let i=indexInitial;i<=size && array_tmp.length<2;i++)
                    {
                        console.log(i,'tesultado')
                        if(i>1)
                            array_tmp.push(i);
                    }
                }
                else if(indexInitial>=2 && indexInitial+2<size){
                    console.log("entrou no meio")
                    for(let i=indexInitial;i<indexInitial+3;i++){
                        console.log(i,"index do meio")
                        array_tmp.push(i);
                    }
                        
                }
                else{
                    console.log("entrou no ultimo")
                    for(let i=size-1;array_tmp.length<3;i--)
                        array_tmp.unshift(i);
                }
                console.log("tamanho enviado ",size)
                return dispatch(GetAllTask(response,array_tmp,size,indexInitial,response.slice(indexInitial*5,(indexInitial*5)+5)));
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