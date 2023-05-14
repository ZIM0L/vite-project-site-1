
import styled from "styled-components";
import bikeComputer from "./img/bikeComputer.jpg";
import bicycleHelmet from "./img/bicycleHelmet.jpg";
import phoneMount from "./img/phoneMount.jpg"

export const IntroductionStyled__Encouragement__Img = styled.div`
height: 70vh;
width: 82%;
border-radius:5px;
filter: grayscale(50%);
background-size: cover;
background-position: center;
background-image: url("${({picNumber}) => picNumber == 1 ? bikeComputer : picNumber == 2 ? bicycleHelmet : phoneMount}");
transition: background-size 1s ease-in-out;
backdrop-filter: opacity(0.7);

&:hover{
    filter: grayscale(0%);

}


`
// try animate it later