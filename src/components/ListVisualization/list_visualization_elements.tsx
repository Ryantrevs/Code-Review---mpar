import styled from 'styled-components';

export const ListContainer = styled.section`
    min-width:89vw;
    min-height:15vh;
    @media(max-width:660px){
        overflow-x:scroll;
    }
`

export const ListItem = styled.div`
    min-width:100vw;
    min-height:5vh;
    display:flex;
    align-items:center;
    &:not(:first-child){
        border-style:none none solid none;
        border-width:1px;
        border-color:#58396C;
    }
    @media(max-width:660px){
        min-width:210vw;
    }
`

export const ListInfoSection = styled.div`
    width:15%;
    min-height:100%;
    @media(max-width:660px){
        min-width:20vw;
        padding:0 5vw;
    }
    
`

export const ListInfoLabel = styled.div`
    height:100%;
    padding:5% 0 0 0;
    width:100%;
    font-size:12pt;
    font-weight:bold;
    text-align:center;
    color:#58396C;
    word-break:break-word;
    @media(max-width:660px){
        min-width:20vw;
        padding:0 5vw;
    }
`

export const ListInfoValue = styled.div`
    height:100%;
    width:100%;
    font-size:12pt;
    display:flex;
    justify-content:space-around;
    text-align:center;
    word-break:break-word;
    @media(max-width:660px){
        min-width:20vw;
        padding:0 5vw;
    }
`
export const ListButtonsHolder = styled.div`
    display:flex;
    width:15%;
    height:10vh;
    align-items:center;
    justify-content:space-evenly;
    @media(max-width:660px){
        min-width:20vw;
        padding:0 8vw 0 5vw;
    }
`

export const ButtonIcon = styled.button`
    background:transparent;
    border:none;
    cursor:pointer;
    &:hover{
        background:#F0F0F0;
    }
`
