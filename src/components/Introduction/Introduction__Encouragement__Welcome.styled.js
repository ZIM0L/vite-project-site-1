import styled from "styled-components";


export const Introduction__WelcomeStyled = styled.div`
display:flex;
align-items: center;

.IntroductionStyled__WelcomeText{ 
    display:flex;
    flex-flow: column nowrap;
    line-height: 1.3em;
    padding: 1em 1em;
    width:50%;
    font-size: clamp(1.8em, 4vw, 5em);
    letter-spacing: -1px;
    gap: 40px;
}

button {
    padding 0.7em 0;
    width: 40%;
    border-radius: 10px;
    transition: all 0.3s ease-out;
}
button:hover{
    cursor: pointer;
    color: white;
    background-color : black;
}
button:hover a{
    color: white;
}
button a {
    text-decoration:none;
    color: black;
}

.IntroductionStyled__Logo {
    width:50%;
    text-align: center;
    height:100%;

}
.IntroductionStyled__Logo img{
    width:80%;
}
`
