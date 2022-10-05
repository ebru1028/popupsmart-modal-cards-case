import { createSlice } from '@reduxjs/toolkit';

export const settingsAndCodeSlice = createSlice({
    name: 'settings',

    initialState: {
        item: {
            webHookUrl: "",
            sendForm:false,
            sendData:false,
        },
        code:{

        }
    },

    reducers: {
        setSettingsAndCode: (state, action) => {
            state.item.webHookUrl = action.payload.webHookUrl;
            state.item.sendForm = action.payload.sendForm;
            state.item.sendData = action.payload.sendData;
        }
    },
});

export const { setSettingsAndCode } = settingsAndCodeSlice.actions;
export default settingsAndCodeSlice.reducer;