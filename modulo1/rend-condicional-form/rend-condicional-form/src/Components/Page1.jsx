import React from "react"
import styled from 'styled-components';


const MainContainer = styled.div`
    display: flex;
    min-height: 70vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

class Page1 extends React.Component{
    render(){
        return(
            <MainContainer>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <label>1. Qual o seu nome?</label>
                <input type="text" />
                <label>2. Qual sua idade?</label>
                <input type="text" />
                <label>3. Qual seu email?</label>
                <input type="text" />
                <label>4. Qual a sua escolaridade?</label>
                <select id="">
                    <option selected disabled value=""></option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
                <button onClick={this.props.onClickP}>Próxima etapa</button>
            </MainContainer>
        )
    }
}

export default Page1;