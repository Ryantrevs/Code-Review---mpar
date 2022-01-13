import TaskModel from "../models/task.model"

export const AddTaskAction = (entity:TaskModel) =>({
    type: 'add-task',
    payload: entity
});

export const EditTaskAction = (entity:TaskModel) =>({
    type: 'edit-task',
    payload: entity
});

export const RemoveTaskAction = (id:number) => ({
    type: 'rm-task',
    payload : id
});

export const GetAllTask = (list:Array<TaskModel>,arrayPagination:Array<number>,size:number,pagination:number,present:Array<TaskModel>) => ({
    type: 'get-all-task',
    payload: {
        content:list,
        pagination:arrayPagination,
        size:size,
        actualPage:pagination,
        tasksPresent:present
    }
});

export const SearchTaskAction = (value:string) => ({
    type: "SearchTask",
    payload:value
})

export const ChangeShowModalADD = (value:boolean, task?:TaskModel) => ({
    type: 'ModalADD',
    payload: {
        showModal:value,
        taskChange:task
    }
});

