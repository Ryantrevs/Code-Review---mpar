import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskThunk } from '../../thunks/TaskThunk';
import { HomePaginationContainer, HomePaginationItem } from './PaginationBottom.elements';

function PaginationBottom({userId}) {

    const taskOpt = useSelector((state:any) => state.task)
    const dispatch = useDispatch()

    function ChangePage(page:number){
        console.log("change page")
        dispatch(TaskThunk.GetAllTask(page-1,userId));
    }

    useEffect(() => {
        console.log("CONFIRMAÇÃO ", taskOpt.size > 0 && taskOpt.pagination!=taskOpt.size-1);
        console.log("TAMANHO ", taskOpt.size);
        console.log("array da paginacao",taskOpt.paginationArray);
        console.log("PAGINA ATUAL CONFIRMAÇÃO ",taskOpt.pagination);
    }, [taskOpt])

    
    return (
        <HomePaginationContainer>
                {taskOpt.pagination<= 0 ? <></>:<HomePaginationItem style={{width:'70px'}} onClick={((event)=> ChangePage(1))}>Primeira</HomePaginationItem>}
                {
                    taskOpt.paginationArray.map((number,index)=>{
                        return(
                            <HomePaginationItem onClick={((event)=> ChangePage(number))} key={index}>{number}</HomePaginationItem>
                        )
                    })
                }
                {taskOpt.size > 0 && taskOpt.pagination!=taskOpt.size -1 ? <HomePaginationItem style={{width:'70px'}} onClick={((event)=> ChangePage(taskOpt.size))}>Ultima</HomePaginationItem>:<></>}
        </HomePaginationContainer>
    )
}

export default PaginationBottom
