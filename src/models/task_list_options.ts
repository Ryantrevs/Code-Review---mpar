import TaskModel from "./task.model";

export default class TaskListOptions{
    public ListTask:Array<TaskModel>;
    public pagination:number;
    public ShowAddModal:boolean;
    public EditTask:TaskModel;
    public paginationArray:Array<number>;
    public size:number;
    public userLogged:number;

    constructor(){
        this.ListTask = new Array<TaskModel>();
        this.pagination = 0;
        this.ShowAddModal = false;
        this.EditTask = undefined;
        this.paginationArray = new Array<number>();
        this.size = 0;
        this.userLogged = -1;
    }

    
}