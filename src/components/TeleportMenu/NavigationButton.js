import React from 'react';
import './NavigationButton.css'

const BACK_BUTTON = require('../../assets/images/BackButton2.png');

class NavigationButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scene: this.props.scene,

        }
    }

    /*
    * Renders on screen mobile navigation buttons
    */
    render(){
        return (
            /* Navigon Buttons */
            <div className="Nav-Buttons-Grid">
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onTouchStart={ () => {this.props.toggleHold("up")}} onTouchEnd={ () => {this.props.toggleRelease()}} >
                        <img className = "Nav-Button-Icon-Up" src = {BACK_BUTTON} alt = "Up"/>
                    </button>
                </div>
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onTouchStart={ () => {this.props.toggleHold("left")}} onTouchEnd={ () => {this.props.toggleRelease()} } >
                        <img className = "Nav-Button-Icon-Left" src = {BACK_BUTTON} alt = "Left"/>
                    </button>
                    <button className = "Nav-Button" onTouchStart={ () => {this.props.toggleHold("right")}} onTouchEnd={ () => {this.props.toggleRelease()}} >
                        <img className = "Nav-Button-Icon-Right" src = {BACK_BUTTON} alt = "Right"/>
                    </button>
                </div>
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onTouchStart={ () => {this.props.toggleHold("down")}} onTouchEnd={ () => {this.props.toggleRelease()}} >
                    <img className = "Nav-Button-Icon-Down" src = {BACK_BUTTON} alt = "Down"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavigationButton;
