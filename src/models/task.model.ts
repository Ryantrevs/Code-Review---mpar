import { IPersonaProps } from "office-ui-fabric-react";

export default class TaskModel{
    constructor(){
        this.FinalDate = undefined;
    }

    public Title:string;
    public Description:string;
    public Initial:string;
    public FinalDate:string;
    public ID:number;
    public People:Array<string>
    public Status:string;
}