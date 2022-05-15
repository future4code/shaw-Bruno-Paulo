import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import {MainContainer} from "./PostStyle"
import PostCards from "../../Components/Cards/Cards";

function Post(){
    const navigate = useNavigate()
    useEffect(()=>{
        let teste = localStorage.getItem('token')
        if(teste === null){
            navigate("/")
        }else{
            
        }
        localStorage.setItem('page', 'post')
    },[])
    return(
        <MainContainer>
            <Header/>
            <PostCards/>
        </MainContainer>
    )
}

export default Post;