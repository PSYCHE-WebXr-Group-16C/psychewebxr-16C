import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import '../../constants/Menu.css'

const BACKGROUND = require("../../assets/images/Space.jpg")
const ASTEROID = require('../../assets/models/TexturedAsteroid.glb');

class Asteroid extends React.Component {
  constructor(props){
    super(props);
    this.state={
      asteroidX: -1.505, // Asteroid X Position
      asteroidY: 0.0, // Asteroid Y Position
      asteroidZ: -4.0, // Asteroid Z Position
    }
  }

  componentDidMount(){} // NOTE Runs this method directly after the component first renders
  componentDidUpdate(){} // NOTE Runs this method every time we call setState({}) (i.e. Re-render component)
  componentWillUnmount(){}

  render () {
    return (
      <div className = "Experience">
        <Scene embedded vr-mode-ui="enabled: false">
          <Entity gltf-model={ASTEROID} scale="1 1 1" rotation="0 -8 0" 
          position={`${this.state.asteroidX} ${this.state.asteroidY} ${this.state.asteroidZ}`} ></Entity>
          <Entity primitive='a-sky' src={BACKGROUND} rotation="0 -100 0"/>
          <Entity light={{type: 'point'}} position="0 10 0" />
        </Scene>
        <button onClick={this.props.action} className= "BackButton"
        style = {{position: "absolute"}}></button>
      </div>
    );
  }
}

export default Asteroid;
