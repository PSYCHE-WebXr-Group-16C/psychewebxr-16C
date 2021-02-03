import React from 'react';
import AFRAME from 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import '../../constants/Menu.css'
import TeleportMenu from '../TeleportMenu/TeleportMenu';
import {matrix, subset, index, multiply} from 'mathjs';

var globalRotX = 0;
var globalRotY = 0;


AFRAME.registerComponent('rotation-logger-asteroid', {
  tick: function () {
    globalRotX = this.el.object3D.rotation.x
    globalRotY = this.el.object3D.rotation.y
  }
});

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/TexturedAsteroid.glb');
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
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
      rotx: 0,
      roty: 0,
      rotz: 0,
      mobile: true,
    }

    this.teleport = this.handleTeleport.bind(this);
    this.upButton = this.handleUpButton.bind(this);
    this.downButton = this.handleDownButton.bind(this);
    this.leftButton = this.handleLeftButton.bind(this);
    this.rightButton = this.handleRightButton.bind(this);

  }

  componentDidMount() {}

  handleTeleport(coords){
    this.setState({cameraX: coords.x, cameraY: coords.y, cameraZ: coords.z,});
  }

  handleUpButton() {
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let r = 0.1
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    var newX = this.state.cameraX - x;
    var newY = this.state.cameraY - y;
    var newZ = this.state.cameraZ - z;

    this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
  }
  handleDownButton() {
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let r = 0.1
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    var newX = this.state.cameraX + x;
    var newY = this.state.cameraY + y;
    var newZ = this.state.cameraZ + z;

    this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
  }
  handleLeftButton() {
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let r = 0.1
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    var t = 3 * Math.PI / 2
    var matrixTran= matrix([[Math.cos(t), 0, Math.sin(t)], [0,1,0], [-1 * Math.sin(t), 0, Math.cos(t)]]);
    var matrixForward = matrix([[x],[y],[z]]);

    var matrixResult = multiply(matrixTran, matrixForward);

    var matx = subset(matrixResult, index(0,0));
    var maty = subset(matrixResult, index(1,0));
    var matz = subset(matrixResult, index(2,0));

    var newX = this.state.cameraX + matx;
    var newY = this.state.cameraY + maty;
    var newZ = this.state.cameraZ + matz;

    this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
  }
  handleRightButton() {
    let theta = globalRotX + Math.PI / 2
    let fi = globalRotY
    let r = 0.1
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    var t = 3 * Math.PI / 2
    var matrixTran= matrix([[Math.cos(t), 0, Math.sin(t)], [0,1,0], [-1 * Math.sin(t), 0, Math.cos(t)]]);
    var matrixForward = matrix([[x],[y],[z]]);

    var matrixResult = multiply(matrixTran, matrixForward);

    var matx = subset(matrixResult, index(0,0));
    var maty = subset(matrixResult, index(1,0));
    var matz = subset(matrixResult, index(2,0));

    var newX = this.state.cameraX - matx;
    var newY = this.state.cameraY - maty;
    var newZ = this.state.cameraZ - matz;

    this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
  }


  render () {
    return (
      <div className = "Experience">
        <div className="HUDElement"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON} onClick={this.props.action}></img></div>
        <Scene vr-mode-ui="enabled: false">
          <a-camera rotation-logger-asteroid
            wasd-controls-enabled={this.state.controlsEnabled} 
            position={`${this.state.cameraX} ${this.state.cameraY} ${this.state.cameraZ}`}
            rotation={`${this.state.rotx} ${this.state.roty} ${this.state.rotz}`}
          >
          </a-camera>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
          <Entity light={{type: 'point'}} position="0 10 0" />
          <Entity gltf-model={ASTEROID} 
            scale="1 1 1"
            rotation="0 -8 0"
            position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`}
          ></Entity>
        </Scene>
        <TeleportMenu scene="ASTEROID" handleTeleport={this.teleport} handleUpButton={this.upButton} handleDownButton={this.downButton} handleLeftButton={this.leftButton} handleRightButton={this.rightButton}/>
      </div>
    );
  }
}

export default Asteroid;
