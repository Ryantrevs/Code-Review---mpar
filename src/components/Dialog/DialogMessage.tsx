import { DefaultButton, Dialog, DialogFooter, PrimaryButton } from 'office-ui-fabric-react';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewMessageDialogAction } from '../../actions/dialog.action';

export function DialogMessage() {

  const dialog = useSelector((state:any) => state.dialog);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mudou dialog",dialog)
  }, [dialog])

  function DismissDialog(){
    dispatch(NewMessageDialogAction('','',true));
  }
    return (
        <>
          <Dialog
            hidden={dialog.showDialog}
            onDismiss={DismissDialog}
            dialogContentProps={dialog}>
            <DialogFooter>
            <DefaultButton text="Fechar" onClick={DismissDialog} />
          </DialogFooter>
          </Dialog>
        </>
    )
}

/*
<Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Send" />
          <DefaultButton onClick={toggleHideDialog} text="Don't send" />
        </DialogFooter>
      </Dialog>

      import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
*/
