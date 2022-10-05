import { createSlice } from '@reduxjs/toolkit';

export const targetingSlice = createSlice({
    name: 'content',

    initialState: {
        item: {
            visitorDevice: "",
            afterXseconds:"",
            afterScroll:"",
            trafficSource:"",
            browserLanguages:[],
            exitIntentTargeting:false,
        },
    },

    reducers: {
        setTargeting: (state, action) => {
            state.item.visitorDevice = action.payload.visitorDevice;
            state.item.afterXseconds = action.payload.afterXseconds;
            state.item.afterScroll = action.payload.afterScroll;
            state.item.trafficSource = action.payload.trafficSource;
            state.item.browserLanguages = action.payload.browserLanguageText;
            state.item.exitIntentTargeting = action.payload.exitIntentTargetingIsChecked;
        }, 
    },
});

export const { setTargeting } = targetingSlice.actions;
export default targetingSlice.reducer;