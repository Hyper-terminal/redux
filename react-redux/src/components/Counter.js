import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const counterDispatcher = useDispatch();
    const counter = useSelector((state) => state.counter);

    const toggleCounterHandler = () => {};

    const incrementHandler = () => {
        counterDispatcher({ type: "INCREMENT" });
    };

    const decrementHandler = () => {
        counterDispatcher({ type: "DECREMENT" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>

            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
