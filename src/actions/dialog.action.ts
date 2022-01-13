export const NewMessageDialogAction = (titleMessage:string, message:string, show:boolean) => ({
    type: 'new-message',
    payload: {
        title:titleMessage, 
        message:message, 
        showDialog:show
    }
});