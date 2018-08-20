import React from 'react';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import './User.css';
import { Link } from 'react-router-dom';

class User1 extends React.Component {
    render() {
        return (
            <div className="user1">
                <Link to="user1"><Icon user={this.props.user} /> </Link>
                <Text msg={this.props.msg} background="#FBF6D9" />
            </div >
        );
    }
}

export default User1;