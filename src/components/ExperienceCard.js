import React from 'react';
import './ExperienceCard.css'

class ExperinceCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {

        if (this.props.goToUrl !== null) {
            return (
                <div className="Experience-Card-Wrapper" onClick={ () => { this.props.exeFunc(this.props.goToUrl) } }>
                    <div className="Experience-Card" style={{"background-color": this.props.color}} >
                        <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                        <p className="Experience-Card-Text">{this.props.title}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="Experience-Card-Wrapper" onClick={() => { this.props.exeFunc(this.props.mode) }} >
                    <div className="Experience-Card" style={{"background-color": this.props.color}}>
                        <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                        <p className="Experience-Card-Text">{this.props.title}</p>
                    </div>
                </div>
            )
        }
    }
}

export default ExperinceCard;
