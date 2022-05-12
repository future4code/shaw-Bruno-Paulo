import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import {MainContainer} from "./PostStyle"

function Post(){
    const navigate = useNavigate()
    useEffect(()=>{
        let teste = localStorage.getItem('token')
        if(teste === null){
            navigate("/")
        }else{
            
        }
    },[])
    const click = () =>{
        var string = window.location.href.split("=").pop();
    }
    return(
        <MainContainer>
            <Header/>
            <button onClick={click}>Click</button>
        </MainContainer>
    )
}

export default Post;