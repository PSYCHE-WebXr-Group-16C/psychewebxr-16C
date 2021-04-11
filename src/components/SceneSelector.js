import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {SPACECRAFT_MODE, ASTEROID_MODE, ABOUT_PSYCHE_MODE, ABOUT_TEAM_MODE} from '../constants/constants';
import Spacecraft from './Spacecraft/Spacecraft';
import Asteriod from './Asteroid/Asteriod';
import './SceneSelector.css';
import Badge from '../assets/images/Psyche-Badge-Mono.png';
import {printDebug} from '../DebugTools';
import AboutPsyche from './About/AboutPsyche';
import AboutTeam from './About/AboutTeam';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import retroPicture from '../assets/images/RetroSpaceCraft.png';
import psycheAsteroid from '../assets/images/Menu-Asteriod.png';
import psycheInfo from '../assets/images/Menu-AboutPsyche.png';
import psycheTeam from '../assets/images/Menu-AboutTeam.png';
import github from '../assets/images/github.png';

export default class SceneSelector extends React.Component {

    constructor(props){
        super(props);
        this.state = { mobileMode: false, disclaimerShown: true }
        this.toggleDisc = this.toggleDisclaimer.bind(this);
    }

    /* Determines if users device is a mobile device */
    checkMobileMode(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            if(this.state.mobileMode !== true){
                this.setState({mobileMode: true,});
            }
        }
        else {
            if(this.state.mobileMode !== false){
                this.setState({mobileMode: false,});
            }
        }
    }

    componentDidMount() {
        this.checkMobileMode();
        printDebug("Launching App in mobile mode: " + this.state.mobileMode);
        this.setState({disclaimerShown: true});
    }

    toggleDisclaimer(){
        this.setState({disclaimerShown: !this.state.disclaimerShown})
    }

    render(){
        return (
            //NOTE DO NOT CHANGE basename="/" IT WILL *NOT* RENDER THE AFRAME SCENES
            //NOTE ONLY CHANGE IF THE HOMEPAGE IS SUPPOSED TO START IN A DIRECTORY OTHER THAN "/". For example "www.EXAMPLEURL.com/ourappfolder" Then it will be basename="/ourappfolder"
            <div>
                <Router basename="/">
                    <Switch>
                        <Route exact path="/asteroid">
                            <Asteriod mobileMode={this.state.mobileMode} />
                        </Route>
                        <Route exact path="/spacecraft">
                            <Spacecraft mobileMode={this.state.mobileMode} />
                        </Route>
                        <Route exact path="/team">
                            <AboutTeam mobileMode={this.state.mobileMode} />
                        </Route>
                        <Route exact path="/mission">
                            <AboutPsyche mobileMode={this.state.mobileMode} />
                        </Route>
                        <Route path="/">
                            <HomePageContent disclaimerShown={this.state.disclaimerShown} toggleDisclaimer={this.toggleDisc} mobileMode={this.state.mobileMode} />
                        </Route>
                    </Switch>
                </Router>
            </div>

        )      
    }

}

/* Renders the home page with the experience card components */
function HomePageContent(props) {
    return (
        <div className="Page-Content">
            <div className="Title">
                <h1>Please Select Your WebXR Experience!</h1>
            </div>
            <div className="Row">
                <ExperienceCard
                    link={true}
                    linkPath={"asteroid"}
                    url={null}
                    title="Asteroid"
                    mode={ASTEROID_MODE}
                    photoPath={psycheAsteroid}
                    altPath={""}
                    color={"#f9a000"}
                />
                <ExperienceCard
                    link={true}
                    linkPath={"spacecraft"}
                    url={null}
                    title="Spacecraft"
                    mode={SPACECRAFT_MODE}
                    photoPath={retroPicture}
                    altPath={""}
                    color={"#f9a000"}
                />
            </div>
            <div className="Row">
                <ExperienceCard
                    link={true}
                    linkPath={"mission"}
                    url={null}
                    title="About Psyche"
                    mode={ABOUT_PSYCHE_MODE}
                    photoPath={psycheInfo}
                    altPath={""}
                    color={"#f47c33"}
                />
                <ExperienceCard
                    link={true}
                    linkPath={"team"}
                    url={null}
                    title="About Team"
                    mode={ABOUT_TEAM_MODE}
                    photoPath={psycheTeam}
                    altPath={""}
                    color={"#f47c33"}
                />
            </div>
            <div className="Row">
            <ExperienceCard
                    link={false}
                    linkPath={null}
                    url={"https://github.com/PSYCHE-WebXr-Group-16C/psychewebxr"}
                    title="Github"
                    mode={null}
                    photoPath={github}
                    altPath={""}
                    color={"#a53f5b"}
                />
                <ExperienceCard
                    link={false}
                    linkPath={null}
                    url={"https://psyche.asu.edu/"}
                    title="Mission Site"
                    mode={null}
                    photoPath={Badge}
                    altPath={""}
                    color={"#a53f5b"}
                />
            </div>
            {
                // This ternary presents the disclaimer on the homepage. When the div "DisclaimerButton is clicked, it disappears."
                props.disclaimerShown ? 
                <div className="Disclaimer">
                    <h3><u>Disclaimer</u></h3>
                    <p>This work was created in partial fulfillment of Arizona State University Capstone Course CSE 486. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu). “Psyche: A Journey to a Metal World” [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets.</p>
                    <p>Trade names and trademarks of ASU and NASA are used in this work for identification only. Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration. The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.</p>
                    <div className="DisclaimerButton" onClick={ () => { props.toggleDisclaimer() } }>Accept</div>
                </div>
                :
                null
            }
        </div>
    );
}


