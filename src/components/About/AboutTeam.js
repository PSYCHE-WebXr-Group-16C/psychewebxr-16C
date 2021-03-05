import React from 'react';
import {Link} from 'react-router-dom';
import './AboutTeam.css'
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
const Zack = require('../../assets/images/Zack.png');
const Ryan = require('../../assets/images/Ryan.png');
const Yu = require('../../assets/images/Yu.png');
const Liangbin = require('../../assets/images/Liangbin.png');

const IMG_ERROR = "Picture Not Found"


class AboutTeam extends React.Component {

    render () {
        return (
            <div className="AboutPage">
                <div className="HUDElement"><Link to="/"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON}/></Link></div>
                <div className="AboutTeamPanel">

                <div style = {{color:"white", display: 'flex', justifyContent: 'center'}}>
                    <h2>Meet the team !</h2>
                </div>

                <div id = "team">
                <div class = "person">
                    <div class = "personImg">
                        <img src={Zack} alt={IMG_ERROR}></img>
                    </div>
                            <p><h3>Zachary Cooper</h3><br/>
                            - Arizona State Univerisity<br/>
                            - Computer Science, Senior<br/>
                            - Product Engineering Intern at Equinix<br/>
                            &nbsp;&nbsp;Specializes in Full Stack Web Development<br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Ryan} alt={IMG_ERROR}></img>
                    </div>
                            <p><h3>Ryan Tucker</h3><br/>
                            - Arizona State Univerisity<br/>
                            - Computer Science, Senior<br/>
                            - Intern at the Pacific Northwest National Laboratory<br/>
                            &nbsp;&nbsp;(Buildings and Connected Systems Group)<br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Yu} alt={IMG_ERROR}></img>
                    </div>
                            <p><h3>Yu Fu</h3><br/>
                            - Arizona State Univerisity<br/>
                            - Computer Science, Senior<br/>
                            - Machine learning project with University of<br/>
                            &nbsp;&nbsp;Southern California <br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Liangbin} alt={IMG_ERROR}></img>
                    </div>
                            <p><h3>Liangbin Gao</h3><br/>
                            - Arizona State Univerisity<br/>
                            - Computer Science, Senior<br/>
                            - Cancer prediction project with Dr. Victor Adamchik<br/>
                           <br/>
                           </p>
                </div>
                </div>

                </div>
            </div>
        )
    }
}


export default AboutTeam;
