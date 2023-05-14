
import { Partners__Container } from "./Partners/Partners__Container.styled";
import { Partner__Card } from "./Partners/Partner__Card.styled";
import Partners__Name from "./Partners/business.json";
import { Hr_Figure } from "./styles/Hr_Figure.styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//make those png as seperate json
import aquasoft_logo from "./Partners/img/aquasoft-logo.png";
import fidotech_logo from "./Partners/img/fidotech-logo.png";
import fitfuel_logo from "./Partners/img/fitfuel-logo.png";
import greengenius_logo from "./Partners/img/greengenius-logo.png";
import brightbox_logo from "./Partners/img/brightbox-logo.png";
import happytails_logo from "./Partners/img/happytails-logo.png";
import cloudpeak_logo from "./Partners/img/cloudpeak-logo.png";
import zenhive_logo from "./Partners/img/zenhive-logo.png";

const partnersArray = [
    aquasoft_logo,
    fidotech_logo,
    fitfuel_logo,
    greengenius_logo,
    brightbox_logo,
    happytails_logo,
    cloudpeak_logo,
    zenhive_logo
];

let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


function Partners() {
    
    return (
        <>
        <Partners__Container>
            <h1>Featured engagements</h1>
            <Slider {...settings}>
                { Partners__Name.Partners.map((obj,key)=> {
                    return (
                        <div key={key}>
                            <Partner__Card className="Card" >
                                <img src={partnersArray[key]} alt="noImage" />
                                <h4>{obj.name}</h4>
                                <p>{obj.description}</p>

                            </Partner__Card>
                        </div>
                    )
                })}         
        </Slider>
        </Partners__Container>  
                <Hr_Figure margin={10}>
                <hr />
                    <div>
                        <span>/3</span>
                        <span>●</span>
                    </div> 
                </Hr_Figure>
        </>
    )
}

export default Partners;