import { IPersonaProps } from "office-ui-fabric-react";

export default class TaskModel{
    constructor(){}

    public Title:string;
    public Description:string;
    public Initial:string;
    public ID:number;
    public People:Array<string>
}