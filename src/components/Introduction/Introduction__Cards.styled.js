import styled from "styled-components";

export const Introduction__Cards = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 10px;
grid-row-gap: 20px;
text-align: center;



div{
    display: flex;
    align-items: center;
    justify-content: center;
}
.Intro__span{
    padding: 0.2em 1.5em;
}
.IntroductionStyled__Footer {
    height: 100%;
} 

.IntroductionStyled__Encouragement--BikeComputer, .IntroductionStyled__Encouragement--BicycleHelmet, .IntroductionStyled__Encouragement--PhoneMount {
    flex-flow: column nowrap;
    justify-content: start;
    text-align: left;
}

.IntroductionStyled__WelcomeText { height: 30vh; display: inline-block; }
.IntroductionStyled__Logo { height: 30vh; display: inline-block;}
.IntroductionStyled__Encouragement--BikeComputer { grid-area: 2 / 1 / 7 / 2; }
.IntroductionStyled__Encouragement--BicycleHelmet { grid-area: 2 / 2 / 7 / 3; }
.IntroductionStyled__Encouragement--PhoneMount { grid-area: 2 / 3 / 7 / 4; }
.IntroductionStyled__Footer { grid-area: 7 / 1 / 8 / 4; }
`