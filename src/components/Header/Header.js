import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/msgActions';
class Header extends React.Component {
    handleClick = (user) => {
        this.props.dispatch(changeUser(user))
    } 
    render() {
        return (
            <div>
                <h2 className="header">JSFactory - Chat</h2>
                <button onClick={()=>{ this.handleClick('user1') }}>User1</button>
                <button onClick={()=>{ this.handleClick('user2') }}>User2</button>
                <p>Current User: {this.props.msgReducer.currentUser} </p>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store;
}
export default connect(mapStateToProps)(Header);