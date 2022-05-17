import './App.css';
import React from 'react';
import PageSelector from './routes/Router';
import styled from 'styled-components'

const MainContainer = styled.div`
`

function App(){
    return(
        <MainContainer>
            <PageSelector/>
        </MainContainer>
    )
}

export default App;
