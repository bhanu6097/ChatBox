import React from 'react';
import User1 from './User1';
import User2 from './User2';
import Input from '../Input/Input';
import {connect} from 'react-redux';

class ChatBox extends React.Component {
    render() {
        return (
            <div>
                <div style={{ overflowY: 'scroll', paddingBottom: '20px' }}>
                    {this.props.msgReducer.messages.map((e,i) => {
                        if(e.user === 'user1'){
                            return <User1 user={e.user} msg={e.msg} />
                        }else{
                            return <User2 user={e.user} msg={e.msg} />
                        }
                    })}
                </div>
                <div>
                    <Input />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store
}
export default connect(mapStateToProps)(ChatBox);