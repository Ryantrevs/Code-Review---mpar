import styled from 'styled-components';

export const ListContainer = styled.section`
    width:89vw;
    min-height:15vh;
`

export const ListItem = styled.div`
    width:100%;
    min-height:5vh;
    display:flex;
    align-items:center;
    &:not(:first-child){
        border-style:none none solid none;
        border-width:1px;
        border-color:#58396C;
    }
`

export const ListInfoSection = styled.div`
    width:25%;
    min-height:100%;
`

export const ListInfoLabel = styled.div`
    height:100%;
    padding:5% 0 0 0;
    width:100%;
    font-size:12pt;
    font-weight:bold;
    text-align:center;
    color:#58396C;
`

export const ListInfoValue = styled.div`
    height:100%;
    width:100%;
    font-size:12pt;
    display:flex;
    justify-content:space-around;
    text-align:center;
`
export const ListButtonsHolder = styled.div`
    display:flex;
    width:25%;
    height:10vh;
    align-items:center;
    justify-content:space-evenly;
`

export const ButtonIcon = styled.button`
    background:transparent;
    border:none;
    cursor:pointer;
    &:hover{
        background:#F0F0F0;
    }
`
