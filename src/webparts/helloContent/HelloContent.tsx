import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeShowModalADD } from '../../actions/task.action';
import AddTaskModal from '../../components/AddTaskModal';
import ListVisualization from '../../components/ListVisualization';
import PaginationBottom from '../../components/PaginationBottom/PaginationBottom';
import TaskListOptions from '../../models/task_list_options';
import { TaskThunk } from '../../thunks/TaskThunk';
import { Button, ButtonsContainer } from '../helloWorld/components/HelloWorld_elements';

export function HelloContent() {

    const taskList = useSelector((state:any) => {return state.task;})

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(TaskThunk.GetAllTask(taskList.pagination));
    },[])

    useEffect(()=>{
      console.log('mudou',taskList)
    },[taskList])

    
    return (
        <>
            <AddTaskModal showModal={taskList.ShowAddModal}/>
            <ButtonsContainer>
            <Button onClick={(event)=>{event.preventDefault(); dispatch(ChangeShowModalADD(true));}}>Adicionar</Button>
            </ButtonsContainer>
            <ListVisualization ListTasks={taskList.ListTask}/>
            <PaginationBottom/>
        </>
    )
}

export default HelloContent
