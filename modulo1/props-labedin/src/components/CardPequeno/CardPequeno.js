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

export default CardPequenob;

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
