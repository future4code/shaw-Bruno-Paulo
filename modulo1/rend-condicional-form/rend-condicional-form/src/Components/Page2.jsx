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

class Page2 extends React.Component{
    render(){
        return(
            <MainContainer>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <label>5. Qual curso?</label>
                <input type="text" />
                <label>6. Qual a unidade de ensino?</label>
                <input type="text" />
                <button onClick={this.props.onClickP}>Próxima etapa</button>
            </MainContainer>
        )
    }
}

export default Page2;