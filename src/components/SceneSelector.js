import React from 'react';
import {MENU_MODE, SPACECRAFT_MODE, ASTEROID_MODE} from '../constants/constants';
import Spacecraft from './Spacecraft/Spacecraft'
import Asteriod from './Asteroid/Asteriod'
import '../constants/Menu.css'
import Badge from '../assets/images/Psyche-Badge-Mono.png'
import { render } from '@testing-library/react';


class SceneSelector extends React.Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = { mode: MENU_MODE }
    }

    buildScene(){
        if(this.state.mode === MENU_MODE){
            return this.menuMode();
        }
        else if(this.state.mode === ASTEROID_MODE){
            return this.asteroidMode();
        }
        else if(this.state.mode === SPACECRAFT_MODE){
            return this.spacecraftMode();
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
                    <button className="MenuButton" onClick={ () => { this.setState({mode: SPACECRAFT_MODE}) } }>
                        Spacecraft Experience</button>
                </div>
                <div style = {{position: 'absolute', right: '5px', bottom: '5px'}}>
                    <img className = "photo" src = {Badge} alt = "Psyche Badge"></img>
                </div>
            </div>
            
        );
    }

    handler() {
        this.setState({ mode: MENU_MODE });
    }

    asteroidMode() {
        return <Asteriod action = {this.handler}/>
    }

    spacecraftMode() {
        return <Spacecraft action = {this.handler}/>
    }

    render () {
        return (
            this.buildScene()
        );
    }
}

export default SceneSelector;

