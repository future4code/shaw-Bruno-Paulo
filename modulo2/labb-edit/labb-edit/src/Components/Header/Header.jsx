import {MainContainer} from "./HeaderStyle"
import logo from "../../Img/logo.PNG"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Header(){
    const [to, setTo] = useState("")
    const [link, setLink] = useState("")
    useEffect(()=>{
        var string = window.location.href.split("=").pop();
        if(string === 'http://localhost:3000/cadastro'){
            setTo("/")
            setLink("Entrar")
        }else{
            setTo("")
            setLink("Sair")
        }
    },[])
    const onClick = () =>{
        var string = window.location.href.split("=").pop();
        if(string === 'http://localhost:3000/cadastro'){

        }else{
            localStorage.removeItem('token')
            window.location.reload()
        }
    }
    return(
        <MainContainer>
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <Link to={to} onClick={()=>onClick()}>{link}</Link>
            </div>
        </MainContainer>
    )
}

export default Header;