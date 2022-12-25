import React from "react";
import "./FrontEnd.css";
import pic1 from "./pic (3).png"


class FrontEnd extends React.Component {
    render() {
        return (
            <div>
                <div className="Background">
                    <div className="content">
                        <div className="developer">Developer Side</div>
                        <div className="Flexbox">
                            <div className="text"><br></br><p> I learnt the framework <b>"React"</b> by myself. I created this website. Even if I haven't learnt much up until now, I am sure I can learn everything I want to. </p></div>
                            <div className="pics"><img alt="" src={pic1} width="107%" height="auto"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FrontEnd;