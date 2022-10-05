import {configureStore} from "@reduxjs/toolkit";

import templateSlice from "./templateSlice";
import appearanceSlice from "./appearanceSlice";
import contentSlice from "./contentSlice";
import targetingSlice from "./targetingSlice";
import settingsAndCodeSlice from "./settingsAndCodeSlice";

export const store = configureStore({
 reducer:{
    templates: templateSlice,
    appearance: appearanceSlice,
    content: contentSlice,
    targeting: targetingSlice,
    settingsAndCode: settingsAndCodeSlice,
 },
});