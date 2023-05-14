import { useState } from "react";
import { Container__Black__Up } from "./Black_Segment/Container__Black--Up.styled";
import bikeVideo_1 from "./Black_Segment/video/Bike_1.mp4"

function AboutUs() {
    
 
    
    return(
        <>

            <Container__Black__Up>
                <div>
                    <p>BASIC/BIKE®</p>
                    <p>HELPS</p>
                    <p>BRANDS ●</p>
                    <p>CONNECT W/</p>
                    <p>CULTURE</p>
                <h3>ADWEEK AGENCY SPOTLIGHT</h3>
                </div>
                <div>ss
                    <video width="100%" src={bikeVideo_1} type="video/mp4" autoPlay muted loop></video>
                </div>
                
            </Container__Black__Up>
        </>
    )
}

export default AboutUs;