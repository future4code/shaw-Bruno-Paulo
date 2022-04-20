import logo from './logo.svg';
import './App.css';
import MainScreen from './Components/MainScreen/MainScreen'
import styled from 'styled-components'

const MainContainer = styled.div`
background-color: #f5f5f5;
`

function App() {
  return (
    <MainContainer>
      <MainScreen>

      </MainScreen>
    </MainContainer>
  );
}

export default App;

