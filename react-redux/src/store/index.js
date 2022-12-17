import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.counter++;
        },

        decreament(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },

        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
    },
});

// auth slice

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
