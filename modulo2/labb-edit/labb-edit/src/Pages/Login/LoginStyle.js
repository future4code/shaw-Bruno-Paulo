import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
font-family: 'IBM Plex Sans', sans-serif;
`
// height: 926px;
// width: 428px;
// left: -406px;
// top: -464px;
// border-radius: 0px;

export const SubContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 100%;
width: 40%;
min-height: 100%;
height: 100vh;
justify-self: center;
background-color: #fff;
img{
    position: relative;
    height: 40%;
}
input{
    width: 87%;
    height: 25%;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    @media screen and (min-width: 1023px){
        height: 35%;
    }
}

hr{
    width: 87%;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: 0;
}
.p1{
    font-weight: 700;
    font-size: 240%;
    color: #373737;
}
.p2{
    font-weight: 300;
    font-size: 100%;
}
.button1{
    width: 87%;
    height: 25%;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: 0;
    color: #fff;
    font-family: 'Noto Sans';
    font-weight: 700;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: 1023px){
        height: 35%;
    }
}
.button2{
    width: 87%;
    height: 25%;
    background: #fff;
    border-radius: 27px;
    color: #FE7E02;
    font-family: 'Noto Sans';
    font-weight: 700;
    border: 1px solid #FE7E02;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: 1023px){
        height: 35%;
    }
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 25%;
    p{
        margin: 0;
    }
}
.mid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4%;
    width: 100%;
    height: 25%;
    @media screen and (min-width: 1023px){
        gap: 8%;
    }
}
.bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4%;
    width: 100%;
    height: 25%;
}
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `
