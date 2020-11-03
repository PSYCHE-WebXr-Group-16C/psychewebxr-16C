import React from 'react';
import {
    DEFAULT_PRESET, 
    PRESET_2,
} from '../../constants/constants';

class TeleportMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            isEnabled: false,
            scene: this.props.scene,

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

    render(){
        return (
            <div className="Teleport-Menu">
                <button className="Teleport-Menu-Toggle" onClick={ () => { this.handleMenu(); } } >{this.state.isEnabled === false? "Show" : "Collapse"}</button>
                {
                    !this.state.isEnabled ? null : 
                    (
                        this.state.scene === "ASTEROID" ? 
                            (
                                /* Asteroid Menu */
                                <div className="Teleport-Sub-Menu">
                                    <button onClick={ () => {this.props.handleTeleport(DEFAULT_PRESET)} } >Place 1</button>
                                    <button onClick={ () => {this.props.handleTeleport(PRESET_2)} } >Place 2</button>
                                </div>
                            )
                            :
                            (
                                /* Spacecraft Menu */
                                <div className="Teleport-Sub-Menu">
                                    <button onClick={ () => {this.props.handleTeleport(DEFAULT_PRESET)} } >Place 1</button>
                                    <button onClick={ () => {this.props.handleTeleport(PRESET_2)} } >Place 2</button>
                                </div>
                            )
                    )
                }
            </div>

        )
    }

}

export default TeleportMenu;