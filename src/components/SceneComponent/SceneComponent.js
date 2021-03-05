import React from 'react';
import {matrix, subset, index, multiply} from 'mathjs';
import AFRAME from 'aframe';

// Camera rotation X value for the currently selected scene
var globalRotX = 0;
// Camera rotation Y value for the currently selected scene
var globalRotY = 0;
// Toggle value used to trigger the start/stop of the mobile navigation controls
var toggle = 0;
// Step size to move user with mobile controls
var stepSize = 0.3

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
        let theta = globalRotX + Math.PI / 2
        let fi = globalRotY
        let z = Math.sin(theta) * Math.cos(fi) * stepSize
        let x = Math.sin(theta) * Math.sin(fi) * stepSize
        let y = Math.cos(theta) * stepSize
    
        var newX = this.state.cameraX - x; // New X Value
        var newY = this.state.cameraY - y; // New Y Value
        var newZ = this.state.cameraZ - z; // New Z Value
    
        this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
      }

      /* Moves the camera backward relative to its current rotation */
      handleDownButton() {
        let theta = globalRotX + Math.PI / 2
        let fi = globalRotY
        let z = Math.sin(theta) * Math.cos(fi) * stepSize
        let x = Math.sin(theta) * Math.sin(fi) * stepSize
        let y = Math.cos(theta) * stepSize
    
        var newX = this.state.cameraX + x; // New X Value
        var newY = this.state.cameraY + y; // New Y Value
        var newZ = this.state.cameraZ + z; // New Z Value
    
        this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
      }

      /* Moves the camera to the left relative to its current rotation */
      handleLeftButton() {
        let theta = globalRotX + Math.PI / 2
        let fi = globalRotY
        let z = Math.sin(theta) * Math.cos(fi) * stepSize // Forward Z Value
        let x = Math.sin(theta) * Math.sin(fi) * stepSize // Forward X Value
        let y = Math.cos(theta) * stepSize // Forward Y Value
    
        var t = 3 * Math.PI / 2 // Theta value for Y axis transformation
        // Y axis transformation matrix
        var matrixTran= matrix([[Math.cos(t), 0, Math.sin(t)], 
        [0,1,0], [-1 * Math.sin(t), 0, Math.cos(t)]]);
        var matrixForward = matrix([[x],[y],[z]]);
    
        // Matrix Transformation
        var matrixResult = multiply(matrixTran, matrixForward);
    
        // Y axis transformation Operation
        var matx = subset(matrixResult, index(0,0));
        var maty = subset(matrixResult, index(1,0));
        var matz = subset(matrixResult, index(2,0));
    
        var newX = this.state.cameraX + matx; // New X Value
        var newY = this.state.cameraY + maty; // New Y Value
        var newZ = this.state.cameraZ + matz; // New Z Value
    
        this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
      }

      /* Moves the camera to the right relative to its current rotation */
      handleRightButton() {
        let theta = globalRotX + Math.PI / 2
        let fi = globalRotY
        let z = Math.sin(theta) * Math.cos(fi) * stepSize // Forward Z Value
        let x = Math.sin(theta) * Math.sin(fi) * stepSize // Forward X Value
        let y = Math.cos(theta) * stepSize // Forward Y Value
    
        var t = 3 * Math.PI / 2 // Theta value for Y axis transformation
        // Y axis transformation matrix
        var matrixTran= matrix([[Math.cos(t), 0, Math.sin(t)], 
        [0,1,0], [-1 * Math.sin(t), 0, Math.cos(t)]]);
        var matrixForward = matrix([[x],[y],[z]]);
    
        // Y axis transformation Operation
        var matrixResult = multiply(matrixTran, matrixForward);
    
        var matx = subset(matrixResult, index(0,0));
        var maty = subset(matrixResult, index(1,0));
        var matz = subset(matrixResult, index(2,0));
    
        var newX = this.state.cameraX - matx; // New X Value
        var newY = this.state.cameraY - maty; // New Y Value
        var newZ = this.state.cameraZ - matz; // New Z Value
    
        this.setState({cameraX: newX, cameraY: newY, cameraZ: newZ,})
      }

}