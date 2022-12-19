import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartVisible: false, isNotification: null },
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        },
        setNotification(state, action) {
            state.isNotification = {
                message: action.payload.message,
                title: action.payload.title,
                status: action.payload.status
            }
        }
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
