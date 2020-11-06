import React from 'react';
import '../../constants/Menu.css'

class TextBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: this.props.message,
            isEnabled: true,
        }
    }

    handleDisplay(){
        this.setState({isEnabled: !this.state.isEnabled,});
    }

    render(){

        var toggleValue = this.state.isEnabled ? "TextExpand":"TextCollapse";
        var buttonText = !this.state.isEnabled ? "Expand":"Collapse";
        return(
            <div className = "TextBox">
                <p className = {"TextBoxContent " + toggleValue}>
                    {this.state.message}
                </p>
                <button className = "TextBoxCollapsible " onClick={ () => { this.handleDisplay(); } }>{buttonText}</button>
            </div>
        )
    }

}

export default TextBox;