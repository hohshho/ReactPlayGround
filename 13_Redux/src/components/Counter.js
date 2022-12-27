import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import { countActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch(countActions.increment());
    };

    const increateHandler = () => {
        // 전달되는 객체
        // { type : UNIQUE_IDENTIFIER, payload : 10}
        dispatch(countActions.increase(5));
    };

    const decrementHandler = () => {
        dispatch(countActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(countActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increateHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {
//     incrementHandler = () => {
//         this.props.increment();
//     };
//     decrementHandler = () => {
//         this.props.decrement();
//     };

//     toggleCounterHandler = () => {};
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
