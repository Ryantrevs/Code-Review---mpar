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
        console.log("CONFIRMAÇÃO ", taskOpt.size/5 <= 0)
        console.log("TAMANHO ", taskOpt.size)
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
                {taskOpt.size/5 > 0 || taskOpt.size==0 ? <></>:<HomePaginationItem style={{width:'70px'}} onClick={((event)=> ChangePage(taskOpt.size/5))}>Ultima</HomePaginationItem>}
        </HomePaginationContainer>
    )
}

export default PaginationBottom
