import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import TeleportMenu from '../TeleportMenu/TeleportMenu';
import TextBox from '../TeleportMenu/TextBox';

const BACKGROUND = require("../../assets/images/Space.jpg");
const SPACECRAFT = require('../../assets/models/Spacecraft.glb');

class Spacecraft extends React.Component {
  constructor(){
    super();
    this.state={
      controlsEnabled: true,
      spacecraftX: 0.189, // spacecraft X Position
      spacecraftY: .760, // spacecraft Y Position
      spacecraftZ: -1.405, // spacecraft Z Position
      cameraX: 0,
      cameraY: 1.7,
      cameraZ: 0,
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
        <Scene vr-mode-ui="enabled: false">
          <div className="HUDElement" aframe-injected><button className="BackButton" onClick={this.props.action}></button></div>
          <a-camera wasd-controls-enabled={this.state.controlsEnabled} position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}>
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
