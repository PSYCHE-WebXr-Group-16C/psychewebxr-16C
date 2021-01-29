import React from 'react';
import '../../constants/Menu.css'
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
const Zack = require('../../assets/images/Zack.jpg');
const Ryan = require('../../assets/images/Ryan.jpg');
const Yu = require('../../assets/images/Yu.jpg');
const Liangbin = require('../../assets/images/Liangbin.jpg');

const IMG_ERROR = "Picture Not Found"


class AboutTeam extends React.Component {

    render () {
        return (
            <div className="AboutPage">
                <div className="HUDElement"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON} onClick={this.props.action}></img></div>
                <div className="AboutTeamPanel">
                    
                <div style = {{color:"white", display: 'flex', justifyContent: 'center'}}>
                    <h1>Meet the team !</h1>
                </div>

                <div id = "team">
                <div class = "person">
                    <div class = "personImg">
                        <img src={Zack} alt={IMG_ERROR} height = "200" width = "200"></img>
                    </div>
                            <p><h2>Zachary Cooper</h2><br/>
                            - Computer Science, Senior<br/>
                            - Product Engineering Intern at Equinix<br/>
                            &nbsp;&nbsp;Specializes in Full Stack Web Development<br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Ryan} alt={IMG_ERROR} height = "200" width = "200"></img>
                    </div>
                            <p><h2>Ryan Tucker</h2><br/>
                            - Computer Science, Senior<br/>
                            - Intern at the Pacific Northwest National Laboratory<br/>
                            &nbsp;&nbsp;(Buildings and Connected Systems Group)<br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Yu} alt={IMG_ERROR} height = "200" width = "200"></img>
                    </div>
                            <p><h2>Yu Fu</h2><br/>
                            - Computer Science, Senior<br/>
                            - Machine learning project with University of<br/>
                            &nbsp;&nbsp;Southern California <br/>
                           </p>
                </div>
                <div class = "person">
                    <div class = "personImg">
                        <img src={Liangbin} alt={IMG_ERROR} height = "200" width = "200"></img>
                    </div>
                            <p><h2>Liangbin Gao</h2><br/>
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