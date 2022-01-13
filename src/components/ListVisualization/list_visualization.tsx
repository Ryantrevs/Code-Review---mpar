import * as React from "react";

import {
  ListContainer,
  ListButtonsHolder,
  ListInfoLabel,
  ListInfoSection,
  ListInfoValue,
  ListItem,
  ButtonIcon,
} from "./list_visualization_elements";

import { TiTrash, TiEdit } from "react-icons/ti";

import { useDispatch } from "react-redux";

import { TaskThunk } from "../../thunks/TaskThunk";

import { ChangeShowModalADD } from "../../actions/task.action";

import { formatRelative, subDays,formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function ListVisualization({ ListTasks }) {
  const dispatch = useDispatch();

  return (
    <ListContainer>
      <ListItem>
        <ListInfoSection>
          <ListInfoLabel>Título</ListInfoLabel>
        </ListInfoSection>
        <ListInfoSection>
          <ListInfoLabel>Descrição</ListInfoLabel>
        </ListInfoSection>
        <ListInfoSection>
          <ListInfoLabel>Iniciado em</ListInfoLabel>
        </ListInfoSection>
        <ListInfoSection>
          <ListInfoLabel>Data de Finalização</ListInfoLabel>
        </ListInfoSection>
        <ListInfoSection>
          <ListInfoLabel>Status</ListInfoLabel>
        </ListInfoSection>
        <ListInfoSection>
          <ListInfoLabel></ListInfoLabel>
        </ListInfoSection>
      </ListItem>
      {ListTasks.map((element, index) => {
        return (
          <ListItem>
            <ListInfoSection>
              <ListInfoValue>{element.Title}</ListInfoValue>
            </ListInfoSection>
            <ListInfoSection>
              <ListInfoValue>{element.Description}</ListInfoValue>
            </ListInfoSection>
            <ListInfoSection>
              <ListInfoValue>
                {formatRelative(new Date(element.Initial), new Date(), {
                  locale: ptBR,
                })}
              </ListInfoValue>
            </ListInfoSection>
            <ListInfoSection>
              <ListInfoValue>
                {element.FinalDate != undefined
                  ? formatDistance(new Date(element.FinalDate), new Date(), { addSuffix: true,locale:ptBR })
                  : ""}
              </ListInfoValue>
            </ListInfoSection>
            <ListInfoSection style={{fontWeight:"bold"}}>
              <ListInfoValue>
                {element.Status != undefined? element.Status : "Em andamento"}
              </ListInfoValue>
            </ListInfoSection>
            <ListButtonsHolder>
              <ButtonIcon
                onClick={() => {
                  dispatch(TaskThunk.DeleteTask(element.ID));
                }}
              >
                <TiTrash size={24} />
              </ButtonIcon>
              <ButtonIcon
                onClick={() => {
                  dispatch(ChangeShowModalADD(true, element));
                }}
              >
                <TiEdit size={24} />
              </ButtonIcon>
            </ListButtonsHolder>
          </ListItem>
        );
      })}
    </ListContainer>
  );
}
/*

*/
