import React from 'react';
import styled from 'styled-components'

function ImagemButtonb(props) {
    return (
        <div>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButtonb;

export const ImagemButtons = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    justify-content: center;
    align-items: center;

    img{
        width: 30px;
        margin-right: 10px;
    }
    div{
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`