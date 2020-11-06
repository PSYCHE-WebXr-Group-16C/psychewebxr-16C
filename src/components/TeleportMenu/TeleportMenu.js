import React from 'react';
import {
    DEFAULT_CONTROLLER,
    DEFAULT_PRESET, 
    PRESET_2,
    MESSAGE_1,
} from '../../constants/constants';
import TextBox from './TextBox';

const MENUBUTTON = require("../../assets/images/MenuButton.svg");

class TeleportMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            isEnabled: false,
            scene: this.props.scene,
            text: DEFAULT_CONTROLLER,
        }

        /* ADD MORE BUTTONS TO HERE */
        this.menu = (
            <div className="Teleport-Sub-Menu">


                <button onClick={ () => {this.props.handleTeleport(DEFAULT_PRESET)} } >Place 1</button>
                <button onClick={ () => {this.props.handleTeleport(PRESET_2)} } >Place 2</button>
            </div>
        )

    }

    handleMenu(){
        this.setState({isEnabled: !this.state.isEnabled,});
    }

    handleMessage(msg) {
        this.setState({text: msg})
    }

    buildTextBox() {
        if (this.state.text === DEFAULT_CONTROLLER) {return null}
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
                                <button onClick={ () => {this.props.handleTeleport(DEFAULT_PRESET); this.handleMessage(DEFAULT_CONTROLLER);} } >Place 1</button>
                                <button onClick={ () => {this.props.handleTeleport(PRESET_2); this.handleMessage(MESSAGE_1);} } >Place 2</button>
                            </div>
                        )
                        :
                        (
                            /* Spacecraft Menu */
                            <div className = {"Teleport-Sub-Menu " + toggleValue}>
                                <button onClick={ () => {this.props.handleTeleport(DEFAULT_PRESET); this.handleMessage(DEFAULT_CONTROLLER);} } >Place 1</button>
                                <button onClick={ () => {this.props.handleTeleport(PRESET_2); this.handleMessage(MESSAGE_1);} } >Place 2</button>
                            </div>
                        ) 
                    }
                </div>
                {this.buildTextBox()}
            </div>
        )
    }

}

export default TeleportMenu;