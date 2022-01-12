import { AddTaskAction, EditTaskAction, GetAllTask, RemoveTaskAction } from "../actions/task.action"
import TaskModel from "../models/task.model";
import { GetTask, AddTask, RemoveTask, EditTaskService, GetContentLenght } from "../services/task.service"

export const TaskThunk = {
    GetAllTask: (indexInitial:number) => (dispatch) => {
        GetTask(indexInitial)
            .then((response) => {
                
                GetContentLenght().then((size)=>{
                    let array_tmp = new Array<number>();
                    let page_tmp = indexInitial;
                    console.log(size/5,"TAMANHO")
                    if(page_tmp<=0 && size/5>=3){
                        console.log('entrou no primeiro')
                        for(let i=2;i<size/5 || i<4;i++)
                            array_tmp.push(i)
                    }
                    else if(page_tmp+1>size/5 && (size/5)>4){
                        console.log("entrou no meio")
                        for(let i=(size/5)-3;i<size/5;i++){
                            console.log(i,"I");
                            array_tmp.push(i)
                        }
                            
                    }
                    else{
                        console.log("entrou no ultimo")
                        for(let i=page_tmp-1;i<=page_tmp+1;i++)
                            if(i>0 && i<size/5)
                                array_tmp.push(i)
                    }
                    return dispatch(GetAllTask(response,array_tmp,size/5,indexInitial))})
                })

                
            .catch((e)=>{console.log("ERRO VE AQUI",e.message)});
    },
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
    }


}