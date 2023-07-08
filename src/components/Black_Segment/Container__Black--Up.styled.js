import styled from "styled-components";

export const Container__Black__Up = styled.div`
display: flex;
width: 98%;
margin: 0 auto;
margin-top: 12em;
max-height: 100em;
overlfow: hidden;

.Wrapper {
    text-align: left; 
}
.Wrapper--Left {
    min-width:40%;
    height: fit-content;
}
//FIX STICKY THING
.Wrapper--Right{
    top: 10vh;
    height: fit-content;
    position: sticky;
    color:white;
    max-width:60%;
}
.Paragraphs--Main p, .Paragraphs--Ads p {
    margin: 0 0;
    font-size: clamp(1.4em, 5vw, 8em);
    letter-spacing: 2px;
    font-weight: 700;
    padding: 0 auto;
    font-style: normal;
    font-variant: small-caps;
    text-transform: uppercase;
}
.Paragraph--Main h3 span{
    font-weight: 400; 
}
.Paragraphs--Ads {
    margin-top: 35vh;
}
h3{
    letter-spacing: 1px;
}

`