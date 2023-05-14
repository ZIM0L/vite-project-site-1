import { Introduction__Cards } from "./Introduction/Introduction__Cards.styled";
import { IntroductionStyled__Encouragement__Img } from "./Introduction/Introduction__Encouragement__Img.styled";
import { Introduction__WelcomeStyled } from "./Introduction/Introduction__Encouragement__Welcome.styled";
import { Hr_Figure } from "./styles/Hr_Figure.styled";

import logo from "./Introduction/img/logo.png"



 function Introduction(){
    return(
        <>
        <Hr_Figure margin={23}>
            <hr />
            <div>
                <span>/2</span>
                <span>●</span>
            </div> 
        </Hr_Figure>
        <Introduction__WelcomeStyled >
            <div className="IntroductionStyled__WelcomeText">
                <span>
                    BASIC/BIKE® specializes in selling high-quality bike accessories, allowing you to enhance your ride with comfort and safety. 
                </span>
                <button > 
                    <a href="http://" target="_blank" rel="noopener noreferrer">SEE THE WORK</a>
                </button>
            </div>
            <div className="IntroductionStyled__Logo">
                <img src={logo} alt="" />
            </div>
        </Introduction__WelcomeStyled>
        
        < Introduction__Cards >
        
            <div className="IntroductionStyled__Encouragement--BikeComputer">
                <IntroductionStyled__Encouragement__Img picNumber={1}/>
                <span className="Intro__span">
                    <h2 style={{margin:0}}>
                    MEASURE 
                    </h2> 
                    your achievements and improve your performance
                    Monitor your physical activity and track your progress
                    Keep your goals in sight
                </span> 
            </div>
            <div className="IntroductionStyled__Encouragement--BicycleHelmet ">
                <IntroductionStyled__Encouragement__Img picNumber={2}/>
                <span className="Intro__span">
                    <h2 style={{margin:0}}>
                    ESSENTIAL 
                    </h2> 
                    piece of gear for any rider 
                    Stay cool and comfortable while riding
                    Safety first
                </span>
            </div>
            <div className="IntroductionStyled__Encouragement--PhoneMount">
                <IntroductionStyled__Encouragement__Img picNumber={3}/>
                <span className="Intro__span">
                    <h2 style={{margin:0}}>
                    Stay 
                    </h2> 
                    connected and stay safe with a phone mount
                    Navigate, listen to music, or stay connected 
                    Keep your phone within reach 
                </span>
            </div>
            <div className="IntroductionStyled__Footer">
                <span>
                    Essential piece of gear for any rider 
                    Stay cool and comfortable while riding
                    Safety first
                </span>
            </div>
        </ Introduction__Cards >

        <Hr_Figure>
            <hr />
                <p>
                /1
                </p>
            <div>
                <span>/5</span>
                <span>●</span>
            </div> 
        </Hr_Figure>
        </>
    )
}

export default Introduction;