import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
    name: 'content',

    initialState: {
        content1: {
            title: "Sign Up",
            subTitle:"Join new adventure",
            fullName: "Enter your full name",
            email: "Enter your email",
            buttonTitle: "Sign Up",
            policyText: "By signing up, you agree to Privacy Policy"
        },
        content2: {
            title: "Hi,stranger",
            description:"Sign up now, and a get 30% discount",
            buttonTitle1: "Log In",
            buttonTitle2: "Sign Up"
        },
        content3:{
            title: "Join our mail list",
            description:"Save up to 30% of your next order",
            buttonTitle: "Sign up now",
        }
    },

    reducers: {
        setContent1: (state, action) => {
            state.content1.title = action.payload.title;
            state.content1.subTitle = action.payload.subTitle;
            state.content1.fullName = action.payload.fullName;
            state.content1.email = action.payload.email;
            state.content1.buttonTitle = action.payload.buttonTitle;
            state.content1.policyText = action.payload.policyText;
        },
        setContent2: (state, action) => {
            state.content2.title = action.payload.title;
            state.content2.description = action.payload.description;
            state.content2.buttonTitle1 = action.payload.buttonTitle1;
            state.content2.buttonTitle2 = action.payload.buttonTitle2;
        },
        setContent3: (state, action) => {
            state.content3.title = action.payload.title;
            state.content3.description = action.payload.description;
            state.content3.buttonTitle = action.payload.buttonTitle;
        },
    },
});

export const { setContent1, setContent2, setContent3 } = contentSlice.actions;
export default contentSlice.reducer;