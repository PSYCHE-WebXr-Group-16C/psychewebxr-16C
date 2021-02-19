import React from 'react';
import {matrix, subset, index, multiply, cross} from 'mathjs';
import AFRAME from 'aframe';

var globalRotX = 0;
var globalRotY = 0;
var toggle = 0;

AFRAME.registerComponent('rotation-logger-asteroid', {
  tick: function () {
    globalRotX = this.el.object3D.rotation.x
    globalRotY = this.el.object3D.rotation.y
  }
});

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

        this.upButton = this.handleUpButton.bind(this);
        this.downButton = this.handleDownButton.bind(this);
        this.leftButton = this.handleLeftButton.bind(this);
        this.rightButton = this.handleRightButton.bind(this);
    }

    toggleHold(selectedFunc) {
      var toggleFunc;
      if (selectedFunc === "up") {
        toggleFunc = this.upButton;
      }
      else if (selectedFunc == "down") {
        toggleFunc = this.downButton;
      }
      else if (selectedFunc == "right") {
        toggleFunc = this.rightButton;
      }
      else {
        toggleFunc = this.leftButton;
      }
      if(toggle===0){
        toggle=setInterval(toggleFunc,100);
      }
    }

    toggleRelease() {
      if(toggle!==0){
        clearInterval(toggle);
        toggle=0;
      }
    }

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

      handleUpButton() {
        let theta = globalRotX + Math.PI / 2
        let fi = globalRotY
        let r = 0.03
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
        let r = 0.03
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
        let r = 0.03
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
        let r = 0.03
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

}