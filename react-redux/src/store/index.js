import { createStore } from "redux";

const defaultVal = {
    counter: 0,
};

const counterReducer = (state = defaultVal, action) => {
    if (action.type === "INCREMENT") {
        return state.counter + 1;
    }

    if (action.type === "DECREMENT") {
        return state.counter - 1;
    }

    return state;
};

const store = createStore(counterReducer);

export default store;