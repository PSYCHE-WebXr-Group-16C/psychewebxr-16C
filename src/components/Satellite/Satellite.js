import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

const BACKGROUND = require("../../assets/images/Space.jpg")
const SATELLITE = require('../../assets/models/PsycheSatellite.glb');

class Satellite extends React.Component {
  constructor(){
    super();
    this.state={
      satelliteX: 0.189, // Satellite X Position
      satelliteY: .760, // Satellite Y Position
      satelliteZ: -1.405, // Satellite Z Position
    }
  }

  render () {
    return (
      <div className = "Experience">
        <Scene embedded vr-mode-ui="enabled: false">
          <Entity gltf-model={SATELLITE} scale="10 10 10" rotation="0 270 0"
          position={`${this.state.satelliteX} ${this.state.satelliteY} ${this.state.satelliteZ}`}></Entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="25 -100 0"/>
          <Entity light={{type: 'point'}} position="0 5 0" />
        </Scene>
        <button onClick={this.props.action} className= "BackButton"
        style = {{position: "absolute"}}></button>
      </div>
    );
  }
}

export default Satellite;
