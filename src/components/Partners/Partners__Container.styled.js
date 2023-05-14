import styled from "styled-components";


export const Partners__Container = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 32em;

    h1{
        padding: 1em 0;
        width:40%;
        text-transform: uppercase;
    }
    h4 {
        margin-bottom: 0;
        position:relative;
    }
//try to use ::before on logo img
    h4::before{
        content: '';
        position:absolute;
        background-color: black;
        height: 1px;
        width: 15%;
        top: -20px;
    }
`