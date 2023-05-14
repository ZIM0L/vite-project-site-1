import styled from "styled-components";

export const Hr_Figure = styled.div`
width: 84%;
margin: 0 auto;
${({margin}) => margin && "margin-top: " + margin + "vh;"}

p{
    margin-bottom: 0;
}
div{
    display:flex;
    justify-content:space-between;
}
hr{ 
    margin-top: 3vh;
}
`