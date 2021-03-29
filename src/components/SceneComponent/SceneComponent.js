import React from 'react';
import { handleUpCalculation, handleDownCalculation, handleLeftCalculation, handleRightCalculation } from '../../math/MovementCalculations';
import AFRAME from 'aframe';

// Camera rotation X value for the currently selected scene
var globalRotX = 0;
// Camera rotation Y value for the currently selected scene
var globalRotY = 0;
// Toggle value used to trigger the start/stop of the mobile navigation controls
var toggle = 0;

/* AFrame component to log the rotation of the camera in the asteroid scene */
AFRAME.registerComponent('rotation-logger-asteroid', {
  tick: function () {
    globalRotX = this.el.object3D.rotation.x
    globalRotY = this.el.object3D.rotation.y
  }
});

/* Aframe component to log the rotation of the camera in the spacecraft scene */
AFRAME.registerComponent('rotation-logger-spacecraft', {
    tick: function () {
      globalRotX = this.el.object3D.rotation.x
      globalRotY = this.el.object3D.rotation.y
    }
  });
  

/* This is the superclass of each scene component. The purpose of this class is to prevent code duplication */
export default class SceneComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            controlsEnabled: true,
            mobile: true,
        }

        /* Binding for mobile navigation control buttons */
        this.upButton = this.handleUpButton.bind(this);
        this.downButton = this.handleDownButton.bind(this);
        this.leftButton = this.handleLeftButton.bind(this);
        this.rightButton = this.handleRightButton.bind(this);
    }

    turnOffFullScreen() {
      try{
        document.getElementById("html").className = "";
      }
      catch{
        window.location.href = "";
      }
    }

    /* Toggles on movement in a given direction */
    toggleHold(selectedFunc) {
      var toggleFunc;
      if (selectedFunc === "up") {
        toggleFunc = this.upButton;
      }
      else if (selectedFunc === "down") {
        toggleFunc = this.downButton;
      }
      else if (selectedFunc === "right") {
        toggleFunc = this.rightButton;
      }
      else {
        toggleFunc = this.leftButton;
      }
      if(toggle===0){
        toggle=setInterval(toggleFunc,100);
      }
    }

    /* Togges off movement */
    toggleRelease() {
      if(toggle!==0){
        clearInterval(toggle);
        toggle=0;
      }
    }

    /* Moves camera to a given position and rotation */
    handleTeleport(coords){
        this.setState({
          cameraX: coords.x,
          cameraY: coords.y,
          cameraZ: coords.z,
          rotx: coords.rx,
          roty: coords.ry,
          rotyz: coords.rz,
          controlsEnabled: coords.controls,
        });
      }

      /* 
      * Moves the camera forward relative to its current rotation.
      * A portion of this is attributed to: 
      * https://stackoverflow.com/questions/48726018/a-frame-move-forward-in-camera-direction
      */
      handleUpButton() {
        let calculation = handleUpCalculation(globalRotX, globalRotY, this.state.cameraX, this.state.cameraY, this.state.cameraZ);
        this.setState({cameraX: calculation.newX, cameraY: calculation.newY, cameraZ: calculation.newZ,})
      }

      /* Moves the camera backward relative to its current rotation */
      handleDownButton() {
        let calculation = handleDownCalculation(globalRotX, globalRotY, this.state.cameraX, this.state.cameraY, this.state.cameraZ);
        this.setState({cameraX: calculation.newX, cameraY: calculation.newY, cameraZ: calculation.newZ,})
      }

      /* Moves the camera to the left relative to its current rotation */
      handleLeftButton() {
        let calculation = handleLeftCalculation(globalRotX, globalRotY, this.state.cameraX, this.state.cameraY, this.state.cameraZ);
        this.setState({cameraX: calculation.newX, cameraY: calculation.newY, cameraZ: calculation.newZ,})
      }

      /* Moves the camera to the right relative to its current rotation */
      handleRightButton() {
        let calculation = handleRightCalculation(globalRotX, globalRotY, this.state.cameraX, this.state.cameraY, this.state.cameraZ);
        this.setState({cameraX: calculation.newX, cameraY: calculation.newY, cameraZ: calculation.newZ,})
      }

}