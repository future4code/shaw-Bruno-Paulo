import React from 'react';
import styled from 'styled-components'

function CardPequenob(props) {
    return (
        <div>
            <img src={ props.imagem } />
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
        </div>
    )
}

function ImagemButtonb(props) {
    return (
        <div>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

function CardGrandeb(props) {
    return (
        <div>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default (CardPequenob, ImagemButtonb, CardGrandeb);

export const CardPequenos = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    justify-items: center;
    
    img{
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
    }

    h4{
        margin-right: 5px;
    }

    div{
        display: flex;
        justify-items: center;
        align-items: center;
    }
`
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

export const CardGrandes = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
    
    img{
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    }
    
    h4{
        margin-bottom: 15px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }
`