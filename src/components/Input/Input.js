import React from 'react';
import './Input.css';
import { connect } from 'react-redux';
import {addMessage} from '../../actions/msgActions';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    addMsg = () => {
        this.setState({
            msg:''
        })
        this.props.dispatch(addMessage(this.props.msgReducer.currentUser,this.state.msg));
    }

    render(){
        return(
            <div className="input-container">
                <input className="input-box" value={this.state.msg} onChange={this.handleChange} type="text" />
                <button className="input-btn" onClick={this.addMsg}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store;
}
export default connect(mapStateToProps)(Input);