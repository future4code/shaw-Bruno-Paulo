import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
position: absolute;
top: 0;
height: 6%;
width: 100%;
background-color: #EDEDED;
@media screen and (min-width: 901px){
            height: 10%;
        }
.left{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    img{
        height: 70%;
    }
}
.right{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 95%;
    a{
        @media screen and (min-width: 901px){
            :hover{
                opacity: 0.7;
            }
        }
    }
}
    a{
        font-family: 'Noto Sans';
        font-weight: 600;
        color: #4088CB;
        text-decoration: none;
    }
    .check{

    }
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `