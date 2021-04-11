import React from 'react';
import {Link} from 'react-router-dom';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import './Asteriod.css'
import TeleportMenu from '../TeleportMenu/TeleportMenu';
import SceneComponent from '../SceneComponent/SceneComponent';

const BACKGROUND = require("../../assets/images/starmap_background.jpg")
const SPLASHSCREEN = require("../../assets/images/Psyche-Badge.png");
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
      cameraX: 0.08, // User Camera X Position
      cameraY: 1.7, // User Camera Y Position
      cameraZ: 0.75, // User Camera Z Position
      rotx: 0, // User Camera Rotation-X Position
      roty: 0, // User Camera Rotation-Y Position
      rotz: 0, // User Camera Rotation-Z Position
      isLoading: true,
      percentage: 0
    }

    this.teleport = this.handleTeleport.bind(this);
    this.upButton = this.handleUpButton.bind(this);
    this.downButton = this.handleDownButton.bind(this);
    this.leftButton = this.handleLeftButton.bind(this);
    this.rightButton = this.handleRightButton.bind(this);
    this.hold = this.toggleHold.bind(this);
    this.release = this.toggleRelease.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(() => {
      this.setState({ percentage: this.state.percentage+1});}, 15);
    setTimeout(() => { 
      this.setState({ isLoading: false});
      clearInterval(interval);
    }, 3000);
  }

  render () {
    var splash = this.state.isLoading ? "Visible":"Hidden";
    return (
      <div className = "Experience">
        <div className="HUDElement"><Link to="/"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON} onClick={() => {this.turnOffFullScreen()}}/></Link></div>
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
          <Entity light={{type: 'point'}} position="0 10 -9" />
          <Entity gltf-model={ASTEROID}
            scale="1 1 1"
            rotation="0 -8 0"
            position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`}
          ></Entity>
        </Scene>
        <TeleportMenu scene="ASTEROID" toggleHold={this.hold} toggleRelease={this.release} handleTeleport={this.teleport} handleUpButton={this.upButton} handleDownButton={this.downButton} handleLeftButton={this.leftButton} handleRightButton={this.rightButton}/>
        <div className={"SplashScreen " + splash}>
              <img className="Splash" src={SPLASHSCREEN} alt={BACKGROUND}/>
              <span class="progress-bar" style={{width:`${this.state.percentage + '%'}`}}></span>
        </div>
      </div>
    );
  }
}

export default Asteroid;
