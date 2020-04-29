import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';

function Counter (props) {
    return (
        <div className="counter">
            <button onClick={props.incDispatch}>+</button>
            <div>{props.counter}</div>
            <button onClick={props.decDispatch}>-</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    incDispatch: () => dispatch(increment()),
    decDispatch: () => dispatch(decrement())
});

export default connect(mapDispatchToProps)(Counter);