/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import React from 'react';
import {Entity} from 'aframe-react';
class Text extends React.Component{

    constructor(props){
        super(props);
        this.state = {color: this.props.color};
        this.colors = [];
    }

    render(){
        return(
            <Entity text={{value: 'Hello, WebVR!', color: `${this.state.color}` }} position=".35 2 -1.1" />
        );
    }

}

export default Text;