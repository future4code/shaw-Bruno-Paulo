import React from "react"
import App from "../App"
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    min-height: 40vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

class PageFinal extends React.Component{
    render(){
        return(
            <MainContainer>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </MainContainer>
        )
    }
}

export default PageFinal;