
import { createSlice } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
    name: 'appearance',

    initialState: {
        size: "medium",
        position: "center2",
        color: "",
    },

    reducers: {
        setSize: (state, action) => {
            state.size = (action.payload);
        },
        setPosition: (state, action) => {
            state.position = (action.payload);
        },
        setColor: (state, action) => {
            state.color = (action.payload);
        },
    },
});

export const { setSize, setPosition, setColor, deleteTodo } = appearanceSlice.actions;
export default appearanceSlice.reducer;