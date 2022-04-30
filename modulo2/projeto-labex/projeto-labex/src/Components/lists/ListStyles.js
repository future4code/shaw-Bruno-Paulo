import styled from 'styled-components'

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #f5f5f5;
width: 35vw;
margin: 1rem;
padding: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;`

export const Title = styled.p`
`

export const RowContainer = styled.div`
display: flex;
flex-direction: row;
p{
    margin: 4px;
}
`

export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const RowContainerPrivate = styled.div`
display: flex;
justify-content: space-between;
p{
    margin: 4px;
}
`

export const CardContainerPrivate = styled.div`
display: flex;
justify-content: space-between;
background-color: #f5f5f5;
width: 35vw;
margin: 1rem;
padding: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
svg{
    font-size: 2em;
    color: grey;
}
svg:hover{
    color: red;
    cursor: pointer;
}
:hover{
    background-color: lightgrey;
    cursor: pointer;
}
`

export const ContainerPaiForm = styled.div`

`
export const SelectForm = styled.select`

`
export const OptionForm = styled.option`

`

export const Container =styled.div`

`
