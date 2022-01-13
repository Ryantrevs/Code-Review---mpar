import { Dialog } from 'office-ui-fabric-react';
import * as React from 'react';
import { useSelector } from 'react-redux';

export function DialogMessage() {

  const state = useSelector((state:any) => state.task)
    return (
        <>
          <Dialog
          hidden={true}>

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
