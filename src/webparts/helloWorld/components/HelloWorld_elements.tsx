import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    display:flex;
    width:89vw;
    height:15vh;
    align-items:center;
    justify-content:space-between;
    background:#F0F0F0;
    border-radius:0.7em;
    padding: 0 2vw;
`

export const Button = styled.button`
    background:transparent;
    border:1px solid #58396C;
    color:#58396C;
    min-width: 100px;
    min-height:50px;
    padding:10px 20px;
    border-radius:0.7em;
    font-weight:bold;
    &:hover{
        background:#58396C;
        border:1px solid #000;
        color:#fff;
        cursor:pointer;
    }
`

export const PaginationContainer = styled.div`
    width:89vw;
    height:15vh;
    background:red;
`

export const PaginationHolder = styled.div`
    min-width:30vw;
    height:100%;
    display:flex;
    justify-content:space-evenly;
`

export const PaginationOpt = styled.button`
    background:transparent;
    border:1px solid #58396C;
    color:#58396C;
    min-width: 20px;
    min-height:20px;
    padding:5px 5px;
    border-radius:0.7em;
    font-weight:bold;
    &:hover{
        background:#58396C;
        border:1px solid #000;
        color:#fff;
        cursor:pointer;
    }
`