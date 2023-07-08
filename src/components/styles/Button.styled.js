import styled from "styled-components";

export const Button = styled.button`

    font-size: clamp(0.8em, 1.5vw, 1em);
    background-color: transparent;
    padding: 7px 15px;
    border-radius: 15px;
    border-color: #FFC6D0;
    text-transform: uppercase;
    color: #FFC6D0;
    transition: all 0.2s ease;

&:hover {
    background-color:#FFC6D0;
    color: black;
    cursor: pointer;
}
`