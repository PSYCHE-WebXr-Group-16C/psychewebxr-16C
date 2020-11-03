import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import '../../constants/Menu.css'
import TeleportMenu from '../TeleportMenu/TeleportMenu';

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/TexturedAsteroid.glb');

class Asteroid extends React.Component {
  constructor(props){
    super(props);
    this.state={
      controlsEnabled: true,
      asteroidX: -1.505, // Asteroid X Position
      asteroidY: 0.0, // Asteroid Y Position
      asteroidZ: -4.0, // Asteroid Z Position
      cameraX: 0,
      cameraY: 1.7,
      cameraZ: 0,
    }

    this.teleport = this.handleTeleport.bind(this);

  }

  componentDidMount(){} // NOTE Runs this method directly after the component first renders
  componentDidUpdate(){} // NOTE Runs this method every time we call setState({}) (i.e. Re-render component)
  componentWillUnmount(){}


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
          <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
          <Entity light={{type: 'point'}} position="0 10 0" />
          <Entity gltf-model={ASTEROID} 
            scale="1 1 1"
            rotation="0 -8 0"
            position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`}
          ></Entity>
        </Scene>
        <TeleportMenu scene="ASTEROID" handleTeleport={this.teleport} />
      </div>
    );
  }
}

export default Asteroid;
