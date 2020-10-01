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
      satelliteX: 0.189,
      satelliteY: .760,
      satelliteZ: -1.405,
    }
  }

  render () {
    return (
      <Scene>
        <a-entity gltf-model={SATELLITE} scale="10 10 10" rotation="0 270 0" position={`${this.state.satelliteX} ${this.state.satelliteY} ${this.state.satelliteZ}`}></a-entity>
        <Entity primitive='a-sky' src={BACKGROUND} rotation="25 -100 0"/>
        <Entity light={{type: 'point'}} position="0 5 0" />
      </Scene>
    );
  }
}

export default Satellite;
