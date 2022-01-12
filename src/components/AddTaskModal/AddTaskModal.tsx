import * as React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { AddTaskContainer, BtnCloseHolder, BtnSubmitHolder, InputHolder, InputLabel, TitleFieldHolder } from './AddTaskModal_elements';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import TaskModel from '../../models/task.model';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ChangeShowModalADD } from '../../actions/task.action';
import { TaskThunk } from '../../thunks/TaskThunk';
import { PeoplePicker } from '../PeoplePicker/PeoplePicker';
import { IPersonaProps, IPersonaSharedProps } from "office-ui-fabric-react";

export function AddTaskModal({showModal}) {

  const [task, setTask] = useState(new TaskModel());
  const [shouldEdit,setShouldEdit] = useState(false);

  const dispatch = useDispatch();

  const TaskOptions = useSelector((state:any) => state.task)

  useEffect(() => {
    if(TaskOptions.EditTask!=undefined){
      setTask(TaskOptions.EditTask);
      setShouldEdit(true);
    }
  }, [TaskOptions])

  function submit(){
    if(shouldEdit)
      dispatch(TaskThunk.EditTask(task));
    else
      dispatch(TaskThunk.AddTaskThunk(task));
  }

    return (
        <Modal
          isOpen={showModal}
          isBlocking={false}
          dragOptions={undefined}
        >
            <AddTaskContainer>
              <BtnCloseHolder>
                <DefaultButton onClick={()=>{dispatch(ChangeShowModalADD(false))}} text="Fechar" />
              </BtnCloseHolder>
              <TitleFieldHolder>Adicione um item na lista</TitleFieldHolder>
              <InputHolder>
                <TextField label="Título *" value={task.Title} onChange={(event:any)=>{setTask({...task,Title:event.target.value})}}/>
              </InputHolder>
              <InputHolder>
                <InputLabel>Donos</InputLabel>
                <PeoplePicker
                onChange={(items?:any)=>{setTask({...task,People:items.map((element,index)=>{console.log("pessoa - "+ index, element); return element.accountName})})}}/>
              </InputHolder>
              <InputHolder>
                <TextField label="Descrição *" value={task.Description} multiline rows={3} onChange={(event:any)=>{setTask({...task,Description:event.target.value})}}/>
              </InputHolder>
              <InputHolder>
                <DatePicker
                  label="Data de inicio"
                  isRequired={true}
                  placeholder="Selecione uma data..."
                  ariaLabel="Selecione a data"
                  value={new Date(task.Initial)}
                  onChange={(event:any)=>{setTask({...task,Initial:event.target.value})}}
                />
              </InputHolder>
              <BtnSubmitHolder>
                <PrimaryButton text='Salvar' onClick={submit}/>
              </BtnSubmitHolder>
            </AddTaskContainer>
        </Modal>
    )
}
