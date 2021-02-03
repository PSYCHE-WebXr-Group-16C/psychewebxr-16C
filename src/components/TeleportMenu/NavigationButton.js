import React from 'react';

const BACK_BUTTON = require('../../assets/images/BackButton2.png');

class NavigationButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scene: this.props.scene,
            
        }
    }

    render(){
        return (
            <div className="Nav-Buttons-Grid">
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onClick={ () => {this.props.handleUpButton()} } >
                        <img className = "Nav-Button-Icon-Up" src = {BACK_BUTTON} alt = "Up"/>
                    </button>
                </div>
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onClick={ () => {this.props.handleLeftButton()} } >
                        <img className = "Nav-Button-Icon-Left" src = {BACK_BUTTON} alt = "Left"/>
                    </button>
                    <button className = "Nav-Button" onClick={ () => {this.props.handleRightButton()} } >
                        <img className = "Nav-Button-Icon-Right" src = {BACK_BUTTON} alt = "Right"/>
                    </button>
                </div>
                <div className = "Nav-Container">
                    <button className = "Nav-Button" onClick={ () => {this.props.handleDownButton()} } >
                    <img className = "Nav-Button-Icon-Down" src = {BACK_BUTTON} alt = "Down"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavigationButton;