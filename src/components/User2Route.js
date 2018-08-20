import React from 'react';
import Profile from './Profile/Profile';
import { connect } from 'react-redux';

class User2Route extends React.Component{
    render(){
        return(
        <Profile  name="user2" url={this.props.msgReducer.urls["user2"]}/>
        );
    }
}

const mapStateToProps = (store) => {
    return store;
}

export default connect(mapStateToProps)(User2Route);