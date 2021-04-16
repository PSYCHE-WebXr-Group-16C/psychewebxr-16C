import React from 'react';
import {Link} from 'react-router-dom'
import './ExperienceCard.css'

export default class ExperienceCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    /*
    * Renders an experience card component
    */
    render(){
        /*
        * Experience card leads to an outside link.
        */
        if(this.props.link === true){
            return(
                <Link className="noLinkStyle" to={`/${this.props.linkPath}`}>
                    <div className="Experience-Card-Wrapper">
                        <div className="Experience-Card" style={{"background-color": this.props.color}}>
                            <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                            <p className="Experience-Card-Text">{this.props.title}</p>
                        </div>
                    </div>
                </Link>
            )
        }
        /*
        * Experience card leads to an internal page.
        */       
        else {
            return(
                    <div className="Experience-Card-Wrapper">
                        <a className="noLinkStyle" target="_blank" rel="noopener noreferrer" href={this.props.url}>
                            <div className="Experience-Card" style={{"background-color": this.props.color}}>
                                <img className="Experience-Card-Image" src={this.props.photoPath} alt={this.props.altPath}></img>
                                <p className="Experience-Card-Text">{this.props.title}</p>
                            </div>
                        </a>
                    </div>
            )
        }
    }
}

