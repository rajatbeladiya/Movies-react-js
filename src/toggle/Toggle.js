import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';

const Toggle = (props) => (
    < div >
        {
            props.messageVisibility && <h2 style={{ color: "white" }}>Hide Text / Show Text based on toggle button</h2>
        }
        <button onClick={props.toggleMessage}>Toggle Me</button>
    </div >
)

const mapStateToProps = (state) => ({
    messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);