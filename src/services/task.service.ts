import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import TaskModel from "../models/task.model";
import { IWebEnsureUserResult } from "@pnp/sp/site-users";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";

export function GetTask(initial:number):Promise<Array<TaskModel>>{
    return new Promise((resolve,reject)=>{
        GetUserLogged()
            .then((response)=>{
                return resolve(sp.web.lists.getByTitle("Lista de Tarefas").items.filter(`OwnerId eq '${response.Id}'`).skip(initial*5).top(5).get<Array<TaskModel>>());
            })
    })
   
    
}

export function AddTask(task:TaskModel):Promise<TaskModel>{
    return new Promise(async(resolve,reject)=>{
        console.log("lista de usuarios",task.People);
        let users = await GetIdUser(task.People);
        sp.web.lists.getByTitle("Lista de Tarefas").items.add({
            Title:task.Title,
            Description:task.Description,
            Initial:task.Initial,
            OwnerId: {
                results:users.map((element,index)=>element.data.Id)
            }
        }).then((value)=>{
            console.log("resultado da adição",value);
            return resolve(value.data);
        })
    })
    
    return;
}

export async function GetIdUser(items:Array<string>):Promise<Array<IWebEnsureUserResult>>{
        let arrayResponse = Promise.all(items.map((item,index)=>{
            
            return sp.web.ensureUser(item);
        }))

        return arrayResponse;
    
}

export function GetUserLogged():Promise<ISiteUserInfo>{
    return sp.web.currentUser.get();
}

export function GetContentLenght():Promise<number>{
    return new Promise((resolve,reject)=>{
        GetUserLogged()
            .then((response)=>{
                sp.web.lists.getByTitle("Lista de Tarefas").items.filter(`OwnerId eq '${response.Id}'`).getAll().then((response)=>{
                    resolve(response.length);
                });
        })
    })
    
}

export function RemoveTask(id:number):Promise<void>{
    console.log("ID",id);
    return new Promise((resolve,reject)=>{
        sp.web.lists.getByTitle("Lista de Tarefas").items.getById(id).delete()
        .then(()=>{
            return resolve();
        }).catch((e)=>{console.log("ERROR ",e.message)})
    })
    

    return;
}

export function EditTaskService(task:TaskModel):Promise<void>{
    return new Promise((resolve,reject)=>{
        sp.web.lists.getByTitle("Lista de Tarefas").items.getById(task.ID).update({
            Title: task.Title,
            Description: task.Description,
            Initial: task.Initial
        }).then(()=>{
            return resolve();
        }).catch((e)=>{
            return reject();
        })
    })
}