import React from 'react';
import { ASTEROID_MODE, SPACECRAFT_MODE } from '../constants/constants';

class ExperinceCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {

        if (this.props.goToUrl !== "ASTEROID" && this.props.goToUrl !== "SPACECRAFT") {
            return (
                <div className="Experience-Card-Wrapper" onClick={ () => { window.location.href = this.props.goToUrl} }>
                    <div className="Experience-Card" >
                        <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                        <p className="Experience-Card-Text">{this.props.title}</p>
                    </div>
                </div>
            )
        }
        else {
            if (this.props.goToUrl === "ASTEROID"){
                return (
                    <div className="Experience-Card-Wrapper" onClick={() => { this.props.exeFunc(ASTEROID_MODE) }} >
                        <div className="Experience-Card" >
                            <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                            <p className="Experience-Card-Text">{this.props.title}</p>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="Experience-Card-Wrapper" onClick={() => { this.props.exeFunc(SPACECRAFT_MODE) }} >
                        <div className="Experience-Card" >
                            <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                            <p className="Experience-Card-Text">{this.props.title}</p>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default ExperinceCard;