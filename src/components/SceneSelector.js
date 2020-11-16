import React from 'react';
import {MENU_MODE, SPACECRAFT_MODE, ASTEROID_MODE, ABOUT_PSYCHE_MODE} from '../constants/constants';
import Spacecraft from './Spacecraft/Spacecraft';
import Asteriod from './Asteroid/Asteriod';
import '../constants/Menu.css';
import Badge from '../assets/images/Psyche-Badge-Mono.png';
import {printDebug} from '../DebugTools';
import AboutPsyche from './About/AboutPsyche';

class SceneSelector extends React.Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = { mode: MENU_MODE, mobileMode: false,}
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
                    <button className="MenuButton" onClick={ () => { this.setState({mode: ASTEROID_MODE}) } }>Asteroid Experience</button>
                    <button className="MenuButton" onClick={ () => { this.setState({mode: SPACECRAFT_MODE}) } }>Spacecraft Experience</button>
                </div>
                <div className="Row">
                {
                    <button className="MenuButton" onClick={ () => { this.setState({mode: ABOUT_PSYCHE_MODE}) } }>About Psyche</button>
                    // INSERT 1 CARDS HERE
                }
                </div>
                <div className="Row">
                    {
                        // INSERT 2 CARDS HERE
                    }
                </div>
                <div className="Footer">
                    <div className="githubWrapper" onClick={() => {window.location.href = "https://github.com/PSYCHE-WebXr-Group-16C/psychewebxr";}}><i className="fa fa-github"></i></div>
                    <img onClick={() => {window.location.href="https://psyche.asu.edu/";}} className="photo" src={Badge} alt="Psyche Badge"></img>
                </div>
            </div>
        )
    }

    handler() {
        this.setState({ mode: MENU_MODE });
    }

    aboutPsycheMode() {
        return <AboutPsyche mobileMode={this.state.mobileMode} action={this.handler}/>
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

