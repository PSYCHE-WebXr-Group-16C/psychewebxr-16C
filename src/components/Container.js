import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import Text from './Text'
 
class Container extends React.Component {
  render () {
    return (
      <Scene>
        <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
        <Entity primitive='a-box' color="red" position="0 0 -5"/>
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>
        <Entity light={{type: 'point'}} position="0 5 0" />
        <Entity particle-system={{preset: 'snow', color: "yellow"}}/>
        <Entity particle-system={{preset: 'snow', color: "blue"}}/>
        <Entity particle-system={{preset: 'snow', color: "orange"}}/>
        <Text color="yellow"/>
        <Entity primitive='a-sky' src={require("../assets/Space.jpg")} rotation="0 -130 0"/>
      </Scene>
    );
  }
}

export default Container;