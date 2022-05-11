import { MainContainer, SubContainer } from "./LoginStyle";
import logo from "../../Img/logo.PNG"

function Login(){
    return(
        <MainContainer>
            <SubContainer>
                <div className="top">
                    <img src={logo} alt="Logo" />
                    <p className="p1">LabEddit</p>
                    <p className="p2">O projeto de rede social da Labenu</p>
                </div>
                <div className="mid">
                    <input type="text" placeholder="Nome"/>
                    <input type="password" placeholder="Senha"/>
                </div>
                <div className="bottom">
                    <button className="button1">Continuar</button>
                    <hr/>
                    <button className="button2">Crie uma conta!</button>
                </div>
            </SubContainer>
        </MainContainer>
    )
}

export default Login;