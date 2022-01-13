import { DialogType } from "office-ui-fabric-react";

export default class DialogModel{
    constructor(){
        this.closeButtonAriaLabel = "Fechar"
        this.type = DialogType.normal;
    }

    public title:string;
    public subText:string;
    public closeButtonAriaLabel:string;
    public showDialog:boolean;
    public type: DialogType

}