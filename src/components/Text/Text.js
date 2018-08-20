import React from 'react';
import './Text.css';
class Text extends React.Component{
    render(){
        return(
            <div>
                <p className="userText" style={{background: this.props.background }}>{this.props.msg}</p>
            </div>
        );
    }
}

export default Text;