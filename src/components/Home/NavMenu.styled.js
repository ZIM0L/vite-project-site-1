import styled from "styled-components";

export const NavMenu = styled.div`
    display: ${({isvisible}) => isvisible};
    height: 10vw;
    background-color: #101010;
    position: sticky;
    top: 0;
    color: white;
    line-height: 10vw;
    text-align: center;
    gap: 10px;
    grid-template-rows:    repeat(1, 10vw);
    grid-template-columns: 1fr minmax(auto, 70%) 1fr;
    
    span{
        padding: 0 5%;
    }

    .Nav{
        display: inline-block
        width: fit-content;
    }

    .Nav a{ 
        padding: 0 1%;
        width: 7%;
        text-decoration: none;
        color: white;
        transition: all 0.3s ease-out;
    }
    .Nav a:hover {
        font-size: 1.2em;
    }
`