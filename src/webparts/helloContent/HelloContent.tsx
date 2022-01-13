import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeShowModalADD, SearchTaskAction } from "../../actions/task.action";
import AddTaskModal from "../../components/AddTaskModal";
import ListVisualization from "../../components/ListVisualization";
import PaginationBottom from "../../components/PaginationBottom/PaginationBottom";
import { TaskThunk } from "../../thunks/TaskThunk";
import {
  Button,
  ButtonsContainer,
} from "../helloWorld/components/HelloWorld_elements";
import DialogMessage from "../../components/Dialog";
import { UserThunk } from "../../thunks/UserThunk";
import { SearchBox } from "office-ui-fabric-react";

export function HelloContent() {
  
  const dispatch = useDispatch();

  const taskList = useSelector((state: any) => {
    return state.task;
  });

  const userState = useSelector((state:any) => state.user);

  useEffect(()=>{
    if(userState=>0)
      dispatch(TaskThunk.GetAllTask(taskList.pagination,userState));
  },[userState]);

  useEffect(() => {
    dispatch(UserThunk.GetUserLogged());
    
  }, []);

  useEffect(() => {
    console.log("mudou", taskList);
  }, [taskList]);

  return (
    <>
      <DialogMessage />
      <AddTaskModal showModal={taskList.ShowAddModal} />
      <ButtonsContainer>
        <Button
          onClick={(event) => {
            event.preventDefault();
            dispatch(ChangeShowModalADD(true));
          }}
        >
          Adicionar
        </Button>
        <SearchBox
          placeholder="buscar tarefa"
          onSearch={(value: string) => {
            dispatch(SearchTaskAction(value));
          }}
        />
      </ButtonsContainer>
      <ListVisualization ListTasks={taskList.ListTaskPresent} />
      <PaginationBottom userId={userState}/>
    </>
  );
}

export default HelloContent;
