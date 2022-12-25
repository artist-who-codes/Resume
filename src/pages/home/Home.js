import React from "react";
import './Home.css';
class Home extends React.Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="intro">
                        <div className="Hello">Hello!  Myself</div>
                        <div className="Abirami" > Abirami</div><br></br>
                        <div className="React"><b>React-Based</b> Front-End Developer</div>
                        <br></br><br></br>
                    </div>

                    <div className="skills">
                        <a href='/art'>Art </a>
                        <a href='/tech'>Front-end Development</a>
                        <a href='/pic'>Photography</a>
                        <a href='/explore'>Explore</a>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                </div>
            </>
        )
    }
}
export default Home;