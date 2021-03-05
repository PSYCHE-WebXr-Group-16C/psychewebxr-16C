import React from 'react';
import './TextBox.css'

class TextBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isEnabled: true,
        }
    }

    /* Toggles the state of the collapsible text box between expanded and collapsed*/
    handleDisplay(){
        this.setState({isEnabled: !this.state.isEnabled,});
    }

    render(){

        // Checks if the text box should render as expanded or collapsed
        var toggleValue = this.state.isEnabled ? "TextExpand":"TextCollapse";
        // Changes the text of the text box button to reflect its current state
        var buttonText = !this.state.isEnabled ? "Expand":"Collapse";
        return(
            <div className = "TextBox">
                <p className = {"TextBoxContent " + toggleValue}>
                    {this.props.message}
                </p>
                <button className = "TextBoxCollapsible " onClick={ () => { this.handleDisplay(); } }>{buttonText}</button>
            </div>
        )
    }

}

export default TextBox;
