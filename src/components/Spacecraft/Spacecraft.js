import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import TeleportMenu from '../TeleportMenu/TeleportMenu';

const BACKGROUND = require("../../assets/images/Space.jpg");
const SPACECRAFT = require('../../assets/models/Spacecraft.glb');
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');

class Spacecraft extends React.Component {
  constructor(){
    super();
    this.state={
      controlsEnabled: true,
      spacecraftX: 0.189, // spacecraft X Position
      spacecraftY: .760, // spacecraft Y Position
      spacecraftZ: -1.405, // spacecraft Z Position
      cameraX: -4.328,
      cameraY: 1.859,
      cameraZ: 1.069,
      rotx: 0,
      roty: 90,
      rotz: 0,
      controllsEnabled: false,
    }
    this.teleport = this.handleTeleport.bind(this);
  }

  handleTeleport(coords){
    this.setState({cameraX: coords.x, cameraY: coords.y, cameraZ: coords.z,});
  }

  render () {
    return (
      <div className = "Experience">
        <div className="HUDElement"><img className="BackButton" src={BACK_BUTTON} alt={BACK_BUTTON2} onClick={this.props.action}></img></div>
        <Scene vr-mode-ui="enabled: false">
          <a-camera 
            wasd-controls-enabled={this.state.controlsEnabled} 
            position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}
            rotation={{x: this.state.rotx, y: this.state.roty, z: this.state.rotz,}}
          >
          </a-camera>
          <Entity gltf-model={SPACECRAFT} 
            scale="0.01 0.01 0.01" 
            rotation="90 0 180"
            position={`${this.state.spacecraftX} ${this.state.spacecraftY} ${this.state.spacecraftZ}`}>
          </Entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="25 -100 0"/>
          <Entity light={{type: 'point'}} position="0 5 0" />
        </Scene>
        <TeleportMenu scene="SPACECRAFT" handleTeleport={this.teleport} />
      </div>
    );
  }
}

export default Spacecraft;
