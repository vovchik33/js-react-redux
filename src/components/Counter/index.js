import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { increment, decrement } from '../../actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.clickCounterIncrement = this.clickCounterIncrement.bind(this);
        this.clickCounterDecrement = this.clickCounterDecrement.bind(this);
    }
    clickCounterBigIncrement() {
        store.dispatch(increment(5));
    }
    clickCounterIncrement() {
        store.dispatch(increment());
    }
    clickCounterBigDecrement() {
        store.dispatch(decrement(5));
    }
    clickCounterDecrement() {
        store.dispatch(decrement());
    }

    render() {
        return (
            <div className="counter">
                <div className="controllers">
                    <button onClick={this.clickCounterBigDecrement}>--</button>
                    <button onClick={this.clickCounterDecrement}>-</button>
                    Current value: {this.props.value}
                    <button onClick={this.clickCounterIncrement}>+</button>
                    <button onClick={this.clickCounterBigIncrement}>++</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (store) {
    return {
        value: store.value
    };
}

export default connect(mapStateToProps)(Counter);