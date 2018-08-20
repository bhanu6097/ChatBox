import React from 'react';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import './User.css'
import { Link } from 'react-router-dom';

class User2 extends React.Component{
    render(){
        return(
            <div className="user2">
                <Text msg={this.props.msg} background="#A74AC7"/>
                <Link to="user2"><Icon user={this.props.user}/></Link>
            </div>
        );
    }
}

export default User2;