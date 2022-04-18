import styled from "styled-components"
import React, { useState } from 'react'

const [secaoComentario,setSecaoComentario] = ""

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {


	const onChangeComentario = (event) => {
		setSecaoComentario(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={secaoComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(secaoComentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario