import styled from 'styled-components';

export const HomePaginationContainer = styled.div`
    padding:5vh 0;
    display:flex;
    justify-content:center;
`

export const HomePaginationItem = styled.button`
    color:#5F1478;
    background:transparent;
    border:none;
    font-size:var(--unnamed-font-size-13);
    font-family:var(--unnamed-font-family-muli);
    border-color:#5F1478;
    border-width:1px;
    border-style:solid solid solid solid;
    width:30px;
    height:35px;
    &:not(:last-child){
        margin:0 1vw 0 0;
    }
    &:hover{
        cursor:pointer;
        background:#5F1478;
        color:#fff;
    }
`