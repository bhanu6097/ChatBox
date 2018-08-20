import React from 'react';
import './Icon.css';
import { connect } from 'react-redux';
class Icon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: this.props.msgReducer.urls[this.props.user]
        }

    }
    render(){
        return(
            <div>
                <img className="icon" src={this.state.url} alt="User1"/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store
}
export default connect(mapStateToProps)(Icon);