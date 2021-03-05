import React from 'react';
import {
    SPACECRAFT_1,
    SPACECRAFT_2,
    SPACECRAFT_3,
    SPACECRAFT_4,
    SPACECRAFT_5,
    ASTEROID_1,
    ASTEROID_2,
    ASTEROID_3,
    ASTEROID_4,
    ASTEROID_5,
    DEFAULT_CONTROLLER,
    MESSAGE_1,
    MESSAGE_2,
    MESSAGE_3,
    MESSAGE_4,
    // MESSAGE_5,
    MESSAGE_6,
    MESSAGE_7,
    MESSAGE_8,
    MESSAGE_9,
} from '../../constants/constants';
import NavigationButton from './NavigationButton';
import TextBox from './TextBox';
import './TeleportMenu.css'
const MENUBUTTON = require("../../assets/images/MenuButton.svg");

/* 
* This class is for a teleportation menu component that allows the user
* to move the camera to default locations by choosing options in the menu
*/
class TeleportMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEnabled: false,
            scene: this.props.scene,
            text: DEFAULT_CONTROLLER,
            controls: this.props.controls,
        }

    }

    /*
    * Checks if user is using a mobile device and if they are
    * returns a mobile controls component.
     */
    buildMobileControls() {
        // Check if mobile device
        var touchEnabled = ('ontouchstart' in document.documentElement);
        
        // Check if user is in "free roam" mode and using a mobile device
        if (this.state.text === DEFAULT_CONTROLLER && touchEnabled === true) {
            return (<NavigationButton toggleHold={this.props.toggleHold} toggleRelease={this.props.toggleRelease} handleUpButton={this.props.handleUpButton} handleDownButton={this.props.handleDownButton} handleLeftButton={this.props.handleLeftButton} handleRightButton={this.props.handleRightButton}></NavigationButton>)
        }
        else {
            return null
        }
    }

    /* Toggles the teleportation menu in/out */
    handleMenu(){
        this.setState({isEnabled: !this.state.isEnabled});
    }

    /* Changes the message in the current scene */
    handleMessage(msg) {
        this.setState({text: msg})
    }

    /* 
    * Checks if the user is in "free roam" mode and returns a text box
    * component if the user is.
    */
    buildTextBox() {
        if (this.state.text === DEFAULT_CONTROLLER) {
            return null
        }
        else {
            return (<TextBox message = {this.state.text}></TextBox>)
        }
    }

    render(){
        var toggleValue = this.state.isEnabled ? "Expand":"Collapse";

        return (
            <div>
                <div className="Teleport-Menu">
                    <button className="Teleport-Menu-Toggle" onClick={ () => { this.handleMenu(); } }>
                        <img className = "Teleport-Menu-icon" src = {MENUBUTTON} alt= "Menu"></img>
                    </button>
                    {
                        this.state.scene === "ASTEROID" ?
                        (
                            /* Asteroid Menu */
                            <div className = {"Teleport-Sub-Menu " + toggleValue}>
                                <button onClick={ () => {this.props.handleTeleport(ASTEROID_1); this.handleMessage(DEFAULT_CONTROLLER); this.handleMenu();} } >Free Roam</button>
                                <button onClick={ () => {this.props.handleTeleport(ASTEROID_2); this.handleMessage(MESSAGE_6); this.handleMenu();} } >Overview</button>
                                <button onClick={ () => {this.props.handleTeleport(ASTEROID_3); this.handleMessage(MESSAGE_7); this.handleMenu();} } >Position</button>
                                <button onClick={ () => {this.props.handleTeleport(ASTEROID_4); this.handleMessage(MESSAGE_8); this.handleMenu();} } >Composition</button>
                                <button onClick={ () => {this.props.handleTeleport(ASTEROID_5); this.handleMessage(MESSAGE_9); this.handleMenu();} } >Formation</button>
                            </div>
                        )
                        :
                        (
                            /* Spacecraft Menu */
                            <div className = {"Teleport-Sub-Menu " + toggleValue}>
                                <button onClick={ () => {this.props.handleTeleport(SPACECRAFT_1); this.handleMessage(DEFAULT_CONTROLLER); this.handleMenu();} } >Free Roam</button>
                                <button onClick={ () => {this.props.handleTeleport(SPACECRAFT_2); this.handleMessage(MESSAGE_1); this.handleMenu();} } >Overview</button>
                                <button onClick={ () => {this.props.handleTeleport(SPACECRAFT_3); this.handleMessage(MESSAGE_3); this.handleMenu();} } >Spectrometer</button>
                                <button onClick={ () => {this.props.handleTeleport(SPACECRAFT_4); this.handleMessage(MESSAGE_4); this.handleMenu();} } >Magnetometer</button>
                                <button onClick={ () => {this.props.handleTeleport(SPACECRAFT_5); this.handleMessage(MESSAGE_2); this.handleMenu();} } >Imager</button>
                            </div>
                        )
                    }
                </div>
                {this.buildTextBox()}
                {this.buildMobileControls()}
            </div>
        )
    }

}

export default TeleportMenu;
