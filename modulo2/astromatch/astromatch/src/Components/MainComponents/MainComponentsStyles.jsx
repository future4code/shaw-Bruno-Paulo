import React from "react"
import styled from "styled-components"
import MainScreen from "./MainComponents"

export const ContainerInside = styled.div`
background-color: #ffff;
height: 80%;
width: 60%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 4%;

@media screen and (min-width: 768px) and (max-width: 1023px){
    width: 50%;
    height: 80%;
}

@media screen and (max-width:767px){
    width: 90%;
    height: 80%;
}
`


export const ContainerInformations = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 80%;
height: 70%;
div{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
div:hover{
    cursor: pointer;
    filter: brightness(20%);
}
img{
    border-radius: 20px;
    width: 100%;
    height: 70%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
`
export const ContainerChoose = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    img{
        width: 15%;
        max-width: 100px;
    }
    img:hover{
    cursor: pointer;
    border: 2px solid #f56a89;
    border-radius: 50px;
}
`