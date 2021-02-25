import React from 'react';
import AFRAME from 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import '../../constants/Menu.css'
import TeleportMenu from '../TeleportMenu/TeleportMenu';
import {matrix, subset, index, multiply, cross} from 'mathjs';
import SceneComponent from '../SceneComponent/SceneComponent';

var globalRotX = 0;
var globalRotY = 0;


// AFRAME.registerComponent('rotation-logger-asteroid', {
//   tick: function () {
//     globalRotX = this.el.object3D.rotation.x
//     globalRotY = this.el.object3D.rotation.y
//   }
// });

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/TexturedAsteroid.glb');
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
class Asteroid extends SceneComponent {
  constructor(props){
    super(props);
    this.state = {
      asteroidX: -1.505, // Asteroid X Position
      asteroidY: 0.0, // Asteroid Y Position
      asteroidZ: -4.0, // Asteroid Z Position
      cameraX: 0,
      cameraY: 1.7,
      cameraZ: 0,
      rotx: 0,
      roty: 0,
      rotz: 0,
    }

    this.teleport = this.handleTeleport.bind(this);
    this.upButton = this.handleUpButton.bind(this);
    this.downButton = this.handleDownButton.bind(this);
    this.leftButton = this.handleLeftButton.bind(this);
    this.rightButton = this.handleRightButton.bind(this);
    this.hold = this.toggleHold.bind(this);
    this.release = this.toggleRelease.bind(this);

  }

  render () {
    return (
      <div className = "Experience">
        <div className="HUDElement"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON} onClick={this.props.action}></img></div>
        <Scene vr-mode-ui="enabled: false">
          <a-entity rotation={`${this.state.rotx} ${this.state.roty} ${this.state.rotz}`}>
            <a-camera rotation-logger-asteroid
              wasd-controls-enabled={this.state.controlsEnabled} 
              position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}
            >
            </a-camera>
          </a-entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
          <Entity light={{type: 'point'}} position="0 10 0" />
          <Entity gltf-model={ASTEROID} 
            scale="1 1 1"
            rotation="0 -8 0"
            position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`}
          ></Entity>
        </Scene>
        <TeleportMenu scene="ASTEROID" toggleHold={this.hold} toggleRelease={this.release} handleTeleport={this.teleport} handleUpButton={this.upButton} handleDownButton={this.downButton} handleLeftButton={this.leftButton} handleRightButton={this.rightButton}/>
      </div>
    );
  }
}

export default Asteroid;
