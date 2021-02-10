import React from 'react';
import SceneComponent from '../SceneComponent/SceneComponent';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import TeleportMenu from '../TeleportMenu/TeleportMenu';

const BACKGROUND = require("../../assets/images/Space.jpg");
const SPACECRAFT = require('../../assets/models/Spacecraft.glb');
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');

class Spacecraft extends SceneComponent {
  constructor(){
    super();
    this.state = {
      spacecraftX: 0.189, // spacecraft X Position
      spacecraftY: .760, // spacecraft Y Position
      spacecraftZ: -1.405, // spacecraft Z Position
      cameraX: 0.08, //User Camera X Position
      cameraY: 1.7, //User Camera Y Position
      cameraZ: 0.75, //User Camera Z Position
      rotx: 0, //User Camera Rotation-X Position
      roty: 0, //User Camera Rotation-Y Position
      rotz: 0, //User Camera Rotation-Z Position
    }
    this.teleport = this.handleTeleport.bind(this);
    this.upButton = this.handleUpButton.bind(this);
    this.downButton = this.handleDownButton.bind(this);
    this.leftButton = this.handleLeftButton.bind(this);
    this.rightButton = this.handleRightButton.bind(this);
  }

  render () {
    return (
      <div className = "Experience">
        <div className="HUDElement"><img className="BackButton" src={BACK_BUTTON} alt={BACK_BUTTON2} onClick={this.props.action}></img></div>
        <Scene vr-mode-ui="enabled: false">
          <a-entity rotation={`${this.state.rotx} ${this.state.roty} ${this.state.rotz}`}>
            <a-camera rotation-logger-spacecraft
              wasd-controls-enabled={this.state.controlsEnabled} 
              position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}
            >
            </a-camera>
          </a-entity>
          <Entity gltf-model={SPACECRAFT} 
            scale="0.01 0.01 0.01" 
            rotation="90 0 180"
            position={`${this.state.spacecraftX} ${this.state.spacecraftY} ${this.state.spacecraftZ}`}>
          </Entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="25 -100 0"/>
          <Entity light={{type: 'point'}} position="0 5 0" />
        </Scene>
        <TeleportMenu scene="SPACECRAFT" handleTeleport={this.teleport} handleUpButton={this.upButton} handleDownButton={this.downButton} handleLeftButton={this.leftButton} handleRightButton={this.rightButton}/>
      </div>
    );
  }
}

export default Spacecraft;
