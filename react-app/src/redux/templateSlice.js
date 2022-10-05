
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTemplates = createAsyncThunk('templates', async (pageNumber) => {
    const res = await axios(`${`https://retoolapi.dev/VWr2rQ/templates?_page=${pageNumber}&_limit=12`}`);
    return res.data;
});

export const selectTemplate = createAsyncThunk('selectTemplate', async (id) => {
    const res = await axios(`${`https://retoolapi.dev/VWr2rQ/templates?id=${id}`}`);
    return res.data;
});

export const templateSlice = createSlice({
    name: 'templates',

    initialState: {
        items: [],
        item: {}
    },

    reducers: {
    },

    extraReducers: builder => {
        builder
         .addCase(fetchTemplates.fulfilled, (state, action) => {
            state.items = action.payload;
         })

         .addCase(selectTemplate.fulfilled, (state, action) => {
            state.item = action.payload[0];
        })
    }

    // extraReducers: {
    //     [fetchTemplates.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //     }
    // }

});

export default templateSlice.reducer;