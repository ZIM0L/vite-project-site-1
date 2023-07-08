import { Container__Black__Up } from "./Black_Segment/Container__Black--Up.styled";
import bikeVideo_1 from "./Black_Segment/video/Bike_1.mp4";
import { Button } from "./styles/Button.styled";

function AboutUs() {
     
    return(
        <>
            <Container__Black__Up>
                <div className="Wrapper Wrapper--Left">
                    <div className="Paragraphs--Main">
                        <p>BASIC/BIKE®</p>
                        <p>HELPS</p>
                        <p>BRANDS ●</p>
                        <p>CONNECT W/</p>
                        <p>CULTURE</p>
                        
                        <h3><span>ADWEEK</span> AGENCY SPOTLIGHT</h3>
                    </div>
                    <Button>About us</Button>
                                      
                    <div className="Paragraphs--Ads">
                        <p>Ride</p>
                        <p>in style</p>
                        <p>● with our</p>
                        <p>premium \ bicycles</p>

                        <h3>ITS TIME</h3>
                        <Button>Products</Button>
                    </div>
                    {/* <p className="ParagraphAds">Ride in style with our premium bicycles</p> */}
                    <div className="Featured_News">
                        <h2>Featured News</h2>
                        <Button>Check it Out</Button>
                    </div> 
                </div>
                <div className="Wrapper Wrapper--Right">
                    <video width="100%" src={bikeVideo_1} type="video/mp4" autoPlay muted loop></video>
                </div>
                
            </Container__Black__Up>
        </>
    )
}

export default AboutUs;