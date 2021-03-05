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
        this.state = { mobileMode: false}
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
    }

    render(){
        return (
            <Router>
            {/* Routing */}
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
                        <HomePageContent mobileMode={this.state.mobileMode} />
                    </Route>
                </Switch>
            </Router>

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
                    color={"#FFCC33"}
                />
                <ExperienceCard
                    link={true}
                    linkPath={"spacecraft"}
                    url={null}
                    title="Spacecraft"
                    mode={SPACECRAFT_MODE}
                    photoPath={retroPicture}
                    altPath={""}
                    color={"#66CCFF"}
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
                    color={"#CCFF99"}
                />
                <ExperienceCard
                    link={true}
                    linkPath={"team"}
                    url={null}
                    title="About Team"
                    mode={ABOUT_TEAM_MODE}
                    photoPath={psycheTeam}
                    altPath={""}
                    color={"#FFFF99"}
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
                    color={"#CCCCCC"}
                />
                <ExperienceCard
                    link={false}
                    linkPath={null}
                    url={"https://psyche.asu.edu/"}
                    title="Mission Site"
                    mode={null}
                    photoPath={Badge}
                    altPath={""}
                    color={"#FF9966"}
                />
            </div>
        </div>
    );
}


