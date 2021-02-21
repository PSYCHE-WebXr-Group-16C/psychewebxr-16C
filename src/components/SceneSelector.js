import React from 'react';
import {MENU_MODE, SPACECRAFT_MODE, ASTEROID_MODE, ABOUT_PSYCHE_MODE, ABOUT_TEAM_MODE} from '../constants/constants';
import Spacecraft from './Spacecraft/Spacecraft';
import Asteriod from './Asteroid/Asteriod';
import './SceneSelector.css';
import Badge from '../assets/images/Psyche-Badge-Mono.png';
import {printDebug} from '../DebugTools';
import AboutPsyche from './About/AboutPsyche';
import AboutTeam from './About/AboutTeam';
import ExperienceCard from './ExperienceCard';
import retroPicture from '../assets/images/RetroSpaceCraft.png';
import psycheAsteroid from '../assets/images/Menu-Asteriod.png';
import psycheInfo from '../assets/images/Menu-AboutPsyche.png';
import psycheTeam from '../assets/images/Menu-AboutTeam.png';
import github from '../assets/images/github.png';

class SceneSelector extends React.Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.toMode = this.toMode.bind(this);
        this.navigateToWebsite = this.navigateToWebsite.bind(this);
        this.state = { mode: MENU_MODE, mobileMode: false, previousMode: MENU_MODE }
    }

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

    componentDidUpdate(){
        this.checkMobileMode();
        if(this.state.mode === MENU_MODE && !this.state.mobileMode && ( this.state.previousMode === SPACECRAFT_MODE || this.state.previousMode === ASTEROID_MODE )){
            document.getElementsByClassName("a-fullscreen")[0].className = ""; // Fixes Full-screen issue
        }

    }

    buildScene(){
        if(this.state.mode === MENU_MODE){
            return this.mainMenu();
        }
        else if(this.state.mode === ASTEROID_MODE){
            return this.asteroidMode();
        }
        else if(this.state.mode === SPACECRAFT_MODE){
            return this.spacecraftMode();
        }
        else if(this.state.mode === ABOUT_PSYCHE_MODE){
            return this.aboutPsycheMode();
        }
        else if(this.state.mode === ABOUT_TEAM_MODE){
            return this.aboutTeamMode();
        }
        else {
            return this.setState({ mode: MENU_MODE });
        }
    }

    menuMode() {
        return (
            <div>
                <div style = {{paddingBottom: '2vh', display: 'flex', justifyContent: 'center'}}>
                    <h1>Select Your WebXR Experience!</h1>
                </div>
                <div style = {{padding: '2vh', display: 'flex', justifyContent: 'center'}}>
                    <button className="MenuButton" onClick={ () => { this.setState({mode: ASTEROID_MODE}) } }>
                        Asteroid Experience</button>
                </div>
                <div style = {{padding: '2vh', display: 'flex', justifyContent: 'center'}}>
                    <button className="MenuButton" onClick={ () => { this.setState({mode: SPACECRAFT_MODE}) } }>Spacecraft Experience</button>
                </div>
                <div style = {{position: 'absolute', right: '5px', bottom: '5px'}}>
                    <div onClick={() => {window.location.href="https://psyche.asu.edu/";}}><img className = "photo" src={Badge} alt="Psyche Badge"></img></div>
                </div>
                <div className="githubWrapper" onClick={() => {window.location.href="https://github.com/PSYCHE-WebXr-Group-16C/psychewebxr";}}><i className="fa fa-github"></i></div>
            </div>

        );
    }

    mainMenu(){
        return(
            <div>
                <div className="Title">
                    <h1>Please Select Your WebXR Experience!</h1>
                </div>
                <div className="Row">
                    <ExperienceCard
                        goToUrl={null}
                        title="Asteroid"
                        mode={ASTEROID_MODE}
                        photoPath={psycheAsteroid}
                        altPath={""}
                        exeFunc={this.toMode}
                        color={"#FFCC33"}
                    />
                    <ExperienceCard
                        goToUrl={null}
                        title="Spacecraft"
                        mode={SPACECRAFT_MODE}
                        photoPath={retroPicture}
                        altPath={""}
                        exeFunc={this.toMode}
                        color={"#66CCFF"}
                    />
                </div>
                <div className="Row">
                    <ExperienceCard
                        goToUrl={null}
                        title="About Psyche"
                        mode={ABOUT_PSYCHE_MODE}
                        photoPath={psycheInfo}
                        altPath={""}
                        exeFunc={this.toMode}
                        color={"#CCFF99"}
                    />
                    <ExperienceCard
                        goToUrl={null}
                        title="About Team"
                        mode={ABOUT_TEAM_MODE}
                        photoPath={psycheTeam}
                        altPath={""}
                        exeFunc={this.toMode}
                        color={"#FFFF99"}
                    />
                </div>
                <div className="Row">
                <ExperienceCard
                        goToUrl={"https://github.com/PSYCHE-WebXr-Group-16C/psychewebxr"}
                        title="Github"
                        mode={null}
                        photoPath={github}
                        altPath={""}
                        exeFunc={this.navigateToWebsite}
                        color={"#CCCCCC"}
                    />
                    <ExperienceCard
                        goToUrl={"https://psyche.asu.edu/"}
                        title="Mission Site"
                        mode={null}
                        photoPath={Badge}
                        altPath={""}
                        exeFunc={this.navigateToWebsite}
                        color={"#FF9966"}
                    />
                </div>
            </div>
        )
    }

    handler() {
        if(this.state.mobileMode === true){
            document.location.reload(); //TODO This is a quick fix for now. Please fix later
        }
        else{
            const temp = this.state.mode;
            this.setState({ mode: MENU_MODE, previousMode: temp });
        }
    }

    aboutPsycheMode() {
        return <AboutPsyche mobileMode={this.state.mobileMode} action={this.handler}/>
    }

    aboutTeamMode(){
        return <AboutTeam mobileMode={this.state.mobileMode} action={this.handler}/>
    }

    navigateToWebsite(x){
        window.location.href = x;
    }

    toMode(x){
        const temp = this.state.mode;
        this.setState({ mode: x, previousMode: temp });
    }

    asteroidMode() {
        return <Asteriod mobileMode={this.state.mobileMode} action={this.handler}/>
    }

    spacecraftMode() {
        return <Spacecraft mobileMode={this.state.mobileMode} action={this.handler}/>
    }

    render () {
        return (
            this.buildScene()
        );
    }
}

export default SceneSelector;

