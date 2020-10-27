import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import '../../constants/Menu.css'
import {DEFAULT_PRESET, PRESET_2} from '../../constants/constants';
import {printDebug} from '../../DebugTools';

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/TexturedAsteroid.glb');

class Asteroid extends React.Component {
  constructor(props){
    super(props);
    this.state={
      controlsEnabled: false,
      asteroidX: -1.505, // Asteroid X Position
      asteroidY: 0.0, // Asteroid Y Position
      asteroidZ: -4.0, // Asteroid Z Position
      cameraX: 0,
      cameraY: 1.7,
      cameraZ: 0,
      cursorColor: "white",
    }
  }

  componentDidMount(){} // NOTE Runs this method directly after the component first renders
  componentDidUpdate(){} // NOTE Runs this method every time we call setState({}) (i.e. Re-render component)
  componentWillUnmount(){}

  /* Applies preset values to component */
  applyPreset(preset) {
    this.setState({
      cameraX: preset.x,
      cameraY: preset.y,
      camearaZ: preset.z,
    });
  }

  /* Use this function to snap the user's camera to preset position markers */
  snapToPosition(marker){
    switch(marker) {
      case 0:
        this.applyPreset(DEFAULT_PRESET);
        break;
      case 1:
        this.applyPreset(PRESET_2);
        break;
      default:
          this.applyPreset(DEFAULT_PRESET);
          break;
    }
  }

  /* Changes user's cursor to indicate that they are hovered over an object with a clickable action */
  onObjectHover(){
    printDebug("Function | onObjectEnter");
    this.setState({cursorColor: "yellow"});
  }
  
  /* Changes user's cursor back to default white */
  onObjectLeave(){
    printDebug("Function | onObjectLeave");
    this.setState({cursorColor: "white"});
  }

  render () {
    return (
      <div className = "Experience">
        <Scene vr-mode-ui="enabled: true">
          <div className="HUDElement" aframe-injected><button onClick={this.props.action}>Back</button></div>
          
          <a-camera wasd-controls-enabled={this.state.controlsEnabled} position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}>
            {
            //  <a-cursor color={this.state.cursorColor}></a-cursor> <-- Causing performance issues
            }
          </a-camera>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
          <Entity light={{type: 'point'}} position="0 10 0" />
          <Entity gltf-model={ASTEROID} 
            scale="1 1 1"
            rotation="0 -8 0"
            position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`}
            events={
              { 
                mousedown: () => {this.snapToPosition(0)}, // 'mousedown' is triggered when the mouse is clicked befroe release
                mouseenter: () => {this.onObjectHover()},  // 'mouseenter' is triggered when 
                mouseleave: () => {this.onObjectLeave()}  // ''mouseleave' is triggered when you stop hovering over an object
              }
            } 
          ></Entity>
        </Scene>
       
      </div>
    );
  }
}

export default Asteroid;
