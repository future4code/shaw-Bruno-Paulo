import styled from 'styled-components';
import React from 'react';

const MainContainerH = styled.div`
    width: 100%;
    height: 15%;
    background-color: #075d5c;
    display: flex;
    align-items: center;
`
const ImageProfile = styled.img`
    width: 11%;
    height: auto;
    border-radius: 50px;
    margin: 2%;
`
const Usuario = styled.h4`
    display: flex;
    color: white;
    margin: 0;
    padding: 0;
    height: 50%;
    text-align: center;
    justify-content: center;
`

const P = styled.p`
    display: flex;
    color: white;
    margin: 0;
    padding: 0;
    height: 50%;
    text-align: center;
    justify-content: center;
`
const SubContainer = styled.div`
    width: 10%;
    height: 80%;
    margin-left: 2%;
    justify-content: center;
    align-items: center;
    text-align: center;
`


class Header extends React.Component{
    render(){
        return(
            <MainContainerH>
                <ImageProfile src='https://picsum.photos/200'></ImageProfile>
                <SubContainer>
                    <Usuario>Usuario</Usuario>
                    <P>Online</P>
                </SubContainer>
            </MainContainerH>
        );
    }
}

export default Header;