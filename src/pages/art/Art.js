import React from "react";
import Loki from "./Loki.jpg";
import Sherlock from "./SH.jpg";
import Cat from "./Cat.jpg";
import Droplets from "./Droplets.jpg";
import Draupati from "./Draupathi.jpg";
import Horse from "./Horse.jpg";
import Krish from "./Krishna.jpg";
import "./Art.css";

class Art extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div className="Background" >
                        <div className="Artist"> Artist Side </div><br></br><br></br><br></br>
                        <div className="Flexbox">
                            <div className="para1"><p>As for my skills in Artistry, I can draw realistic drawings. I have drawn fictional characters, which inspired me, like 'Draupati', ' Sherock Holmes', 'Loki Laufeyson' etc. I prefer pencil drawings and sketches because it can show detail without much fuss. Thats why all my drawings are in monochrome.<br></br><br></br> I not only draw fictional characters but also real life characters sometimes </p></div>
                            <div className="drawings">
                                <img src={Horse} alt="" width='250vw' height='320vh'></img>
                                <img src={Sherlock} alt="" width='240vw' height='320vh'></img>
                            </div>
                        </div>
                        <div className="Pictures" >
                            <div>
                                <img src={Krish} alt="" width='245vw' height='250vh'></img>
                                <img src={Draupati} alt="" width='245vw' height='250vh'></img>
                            </div>
                            <div>
                                <img src={Cat} alt="" width='270vw' height='250vh'></img>
                                <img src={Droplets} alt="" width='280vw' height='250vh'></img>
                            </div>
                        </div>
                        <div className="Flex2" style={{ paddingTop: '7%' }}>
                            <div>
                                <img src={Sherlock} alt="" width='420vw' height='560vw'></img>
                            </div>
                            <div>
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                <p> This is one of my master-pieces. Sherlock Holmes from "Sherlock"</p>
                            </div>
                        </div>
                        <div className="Flex2">
                            <div>
                                <img src={Loki} alt="" width='430vw' height='540vw'></img>
                            </div>
                            <div>
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                <p> This is my on-going work. which turned out to be another master piece. <br></br><br></br><center>Loki Laufeyson</center></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Art;