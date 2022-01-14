import * as React from "react";
import { Modal } from "office-ui-fabric-react/lib/Modal";
import {
  DefaultButton,
  PrimaryButton,
} from "office-ui-fabric-react/lib/Button";
import {
  AddTaskContainer,
  BtnCloseHolder,
  BtnSubmitHolder,
  InputHolder,
  InputLabel,
  TitleFieldHolder,
} from "./AddTaskModal_elements";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DatePicker } from "office-ui-fabric-react/lib/DatePicker";
import TaskModel from "../../models/task.model";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeShowModalADD } from "../../actions/task.action";
import { TaskThunk } from "../../thunks/TaskThunk";
import { PeoplePicker } from "../PeoplePicker/PeoplePicker";
import {
  ComboBox,
  IComboBoxOption,
  IComboBoxProps,
  IComboBoxStyles,
  IPersonaProps,
  IPersonaSharedProps,
} from "office-ui-fabric-react";
import { NewMessageDialogAction } from "../../actions/dialog.action";

export function AddTaskModal({ showModal }) {
  const [task, setTask] = useState(new TaskModel());
  const [shouldEdit, setShouldEdit] = useState(false);

  const dispatch = useDispatch();

  const TaskOptions = useSelector((state: any) => state.task);

  const options: IComboBoxOption[] = [
    { key: "Em Andamento", text: "Em Andamento" },
    { key: "Concluída", text: "Concluída" },
  ];
  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300,zIndex:1} };
  const onChange: IComboBoxProps["onChange"] = (event, option) => {
    console.log("Opção", option);
    setTask({ ...task, Status: option.text });
  };

  useEffect(() => {
    if (TaskOptions.EditTask != undefined) {
      setTask(TaskOptions.EditTask);
      setShouldEdit(true);
      console.log(TaskOptions.EditTask , "ESSA AQUI")
    }
  }, [TaskOptions]);

  function submit() {
    if (ValidationField()) {
      if (shouldEdit) dispatch(TaskThunk.EditTask(task));
      else dispatch(TaskThunk.AddTaskThunk(task));
    }
  }

  function ValidationField(): boolean {
    let tempDate = Date.parse(task.Initial);
    console.log("DATA", tempDate, "DATA ORIGINAL", task.Initial);
    if (isNaN(tempDate) == true) {
      console.log("data invalida");
      dispatch(
        NewMessageDialogAction("Ops", "Digite uma data de inicio válida", false)
      );
      return false;
    } else if (task.Title == undefined || task.Title.trim().length <= 3) {
      dispatch(
        NewMessageDialogAction(
          "Ops",
          "Digite uma título válido\nO titulo deve conter pelo menos 3 caracteres",
          false
        )
      );
      return false;
    } else if (
      task.Description == undefined ||
      task.Description.trim().length <= 10
    ) {
      dispatch(
        NewMessageDialogAction(
          "Ops",
          "Digite uma descrição válida\nO titulo deve conter pelo menos 10 caracteres",
          false
        )
      );
      return false;
    } else if (task.People == undefined || task.People.length === 0) {
      dispatch(
        NewMessageDialogAction(
          "Ops",
          "Defina pelo menos um resposável para esta tarefa.",
          false
        )
      );
      return false;
    } else if (task.Deadline == undefined) {
      if (shouldEdit == false)
        setTask({ ...task, Deadline: new Date().toDateString() });
      else{
        dispatch(
          NewMessageDialogAction("Ops", "Defina uma data para o prazo.", false)
        );
        return false;
      }
    }

    return true;
  }

  return (
    <Modal
      isOpen={showModal}
      isBlocking={false}
      dragOptions={undefined}
      onDismissed={() => {
        console.log("entrou");
        setTask(new TaskModel());
        setShouldEdit(false);
      }}
    >
      <AddTaskContainer>
        <BtnCloseHolder>
          <DefaultButton
            onClick={() => {
              dispatch(ChangeShowModalADD(false));
            }}
            text="Fechar"
          />
        </BtnCloseHolder>
        <TitleFieldHolder>Adicione um item na lista</TitleFieldHolder>
        <InputHolder>
          <TextField
            label="Título *"
            value={task.Title}
            onChange={(event: any) => {
              setTask({ ...task, Title: event.target.value });
            }}
          />
        </InputHolder>
        <InputHolder>
          <InputLabel>Donos</InputLabel>
          <PeoplePicker
            onChange={(items?: any) => {
              setTask({
                ...task,
                People: items.map((element, index) => {
                  console.log("pessoa - " + index, element);
                  return element.accountName;
                }),
              });
            }}
          />
        </InputHolder>
        <InputHolder>
          <TextField
            label="Descrição *"
            value={task.Description}
            multiline
            rows={3}
            onChange={(event: any) => {
              setTask({ ...task, Description: event.target.value });
            }}
          />
        </InputHolder>
        <InputHolder>
          <DatePicker
            label="Data de inicio"
            isRequired={true}
            placeholder="Selecione uma data..."
            ariaLabel="Selecione a data"
            value={new Date(task.Initial)}
            minDate={new Date()}
            onSelectDate={(event: any) => {
              setTask({ ...task, Initial: event });
            }}
          />
        </InputHolder>
        <InputHolder>
          <ComboBox
            defaultSelectedKey={task.Status}
            label="Status"
            options={options}
            calloutProps={{ doNotLayer: true }}
            onChange={onChange}
            value={task.Status}
            styles={comboBoxStyles}
            style={{zIndex:1}}
          />
        </InputHolder>
        <InputHolder>
          <DatePicker
            label="Data de término"
            isRequired={true}
            placeholder="Selecione uma data..."
            ariaLabel="Selecione a data"
            value={new Date(task.FinalDate)}
            minDate={
              task.Initial != undefined ? new Date(task.Initial) : new Date()
            }
            maxDate={new Date()}
            disabled={!shouldEdit}
            onSelectDate={(event: any) => {
              setTask({ ...task, FinalDate: event });
            }}
          />
        </InputHolder>
        <InputHolder>
          <DatePicker
            label="Prazo"
            isRequired={true}
            placeholder="Selecione uma data..."
            ariaLabel="Selecione a data"
            minDate={new Date(task.Initial)}
            value={new Date(task.Deadline)}
            disabled={shouldEdit}
            onSelectDate={(event: any) => {
              setTask({ ...task, Deadline: event });
            }}
          />
        </InputHolder>
        <BtnSubmitHolder>
          <PrimaryButton text="Salvar" onClick={submit} />
        </BtnSubmitHolder>
      </AddTaskContainer>
    </Modal>
  );
}
