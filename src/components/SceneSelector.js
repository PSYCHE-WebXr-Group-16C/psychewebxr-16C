import React from 'react';
import {MENU_MODE, SATELLITE_MODE, ASTEROID_MODE} from '../constants/constants';
import Satellite from './Satellite/Satellite'
import Asteriod from './Asteroid/Asteriod'


class SceneSelector extends React.Component{

    constructor() {
        super();
        this.state = { mode: MENU_MODE }
    }

    buildScene(){
        if(this.state.mode === MENU_MODE){
            return this.menuMode();
        }
        else if(this.state.mode === ASTEROID_MODE){
            return this.asteroidMode();
        }
        else if(this.state.mode === SATELLITE_MODE){
            return this.satelliteMode();
        }
        else {
            return this.setState({ mode: MENU_MODE });
        }
    }

    menuMode() {
        return (
            <div>
                <h1>Select Your WebXR Experience!</h1>
                <button onClick={ () => { this.setState({mode: ASTEROID_MODE}) } }>Asteroid Experience</button>
                <button onClick={ () => { this.setState({mode: SATELLITE_MODE}) } }>Satellite Experience</button>
            </div>
        );
    }

    asteroidMode() {
        return <Asteriod />
    }

    satelliteMode() {
        return <Satellite />
    }

    render () {
        return (
            this.buildScene()
        );
    }
}

export default SceneSelector;

