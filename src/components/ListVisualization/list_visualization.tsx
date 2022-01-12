import * as React from 'react';
import { List, ScrollToMode } from 'office-ui-fabric-react/lib/List';
import { useEffect } from 'react';
import { ListContainer, ListButtonsHolder, ListInfoLabel, ListInfoSection, ListInfoValue, ListItem, ButtonIcon } from './list_visualization_elements';
//AiTwotoneEdit
import {TiTrash, TiEdit} from 'react-icons/ti'
import { useDispatch } from 'react-redux';
import { TaskThunk } from '../../thunks/TaskThunk';
import { ChangeShowModalADD } from '../../actions/task.action';

export function ListVisualization({ListTasks}) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("MUDOU2",ListTasks);
  }, [ListTasks])

    return (
      <ListContainer>
        {ListTasks.map((element,index)=>{
          return (
            
              <ListItem>
                <ListInfoSection>
                  <ListInfoLabel>Título</ListInfoLabel>
                  <ListInfoValue>{element.Title}</ListInfoValue>
                </ListInfoSection>
                <ListInfoSection>
                  <ListInfoLabel>Descrição</ListInfoLabel>
                  <ListInfoValue>{element.Description}</ListInfoValue>
                </ListInfoSection>
                <ListInfoSection>
                  <ListInfoLabel>Iniciado em</ListInfoLabel>
                  <ListInfoValue>{element.Initial}</ListInfoValue>
                </ListInfoSection>
                <ListButtonsHolder>
                  <ButtonIcon onClick={()=>{dispatch(TaskThunk.DeleteTask(element.ID))}}>
                    <TiTrash size={24}/>
                  </ButtonIcon>
                  <ButtonIcon onClick={()=>{dispatch(ChangeShowModalADD(true,element))}}>
                    <TiEdit size={24}/>
                  </ButtonIcon>
                </ListButtonsHolder>
              </ListItem>
            
          )
        })}
      </ListContainer>
      
    )
}
/*

*/

