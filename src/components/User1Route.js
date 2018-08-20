import React from 'react';
import Profile from './Profile/Profile';
import { connect } from 'react-redux';
class User1Route extends React.Component{
    render(){
        return(
        <Profile name="user1" url={this.props.msgReducer.urls["user1"]}/>
        );
    }
}

const mapStateToProps = (store) => {
    return store;
}

export default connect(mapStateToProps)(User1Route);