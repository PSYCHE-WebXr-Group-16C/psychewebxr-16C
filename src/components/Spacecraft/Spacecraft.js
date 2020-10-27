import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

const BACKGROUND = require("../../assets/images/Space.jpg");
const SPACECRAFT = require('../../assets/models/Spacecraft.glb');

class Spacecraft extends React.Component {
  constructor(){
    super();
    this.state={
      spacecraftX: 0.189, // spacecraft X Position
      spacecraftY: .760, // spacecraft Y Position
      spacecraftZ: -1.405, // spacecraft Z Position
    }
  }

  render () {
    return (
      <div className = "Experience">
        <Scene vr-mode-ui="enabled: false">
          <div className="HUDElement" aframe-injected><button className="BackButton" onClick={this.props.action}></button></div>
          <Entity gltf-model={SPACECRAFT} scale="0.01 0.01 0.01" rotation="90 0 180"
          position={`${this.state.spacecraftX} ${this.state.spacecraftY} ${this.state.spacecraftZ}`}></Entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="25 -100 0"/>
          <Entity light={{type: 'point'}} position="0 5 0" />
        </Scene>
        <button onClick={this.props.action} className= "BackButton"
        style = {{position: "absolute"}}></button>
      </div>
    );
  }
}

export default Spacecraft;
