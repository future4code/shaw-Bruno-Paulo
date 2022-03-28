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

class Page3 extends React.Component{
    render(){
        return(
            <MainContainer>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <label>5. Por que você não terminou um curso de graduação?</label>
                <input type="text" />
                <label>6. Você fez algum curso complementar?</label>
                <select id="">
                    <option selected disabled value="">Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Cursos de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
                <button onClick={this.props.onClickP}>Próxima etapa</button>
            </MainContainer>
        )
    }
}

export default Page3;