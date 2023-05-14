import styled from "styled-components";

export const Container__Black__Up = styled.div`
display: flex;
width: 95%;
margin: 0 auto;
margin-top: 12em;
height: 70em;

& div:nth-child(2) {
    top: 0;
    height: 3em;
    position: sticky;
    color:white;
    border: 1px black solid;
}
div {
    text-align: left;
    width: 50%;
}
p{
    margin: 0 0;
    font-size: 4em;
    letter-spacing: 2px;
 
    font-weight: 700;
    padding: 0 auto;
    font-style: normal;
    font-variant: small-caps;
    text-transform: uppercase;
}
`