import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ColorItem, ColorState, Status } from "../@types";
import { getColors } from "../actions/color";

const initialState: ColorState = {
    colors: [],
    status: null,
};

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColors: (state: ColorState, action: PayloadAction<ColorItem[]>) => {
            state.colors = action.payload;
        },
    },
    extraReducers: {
        [getColors.fulfilled.type]: (state: ColorState, action: PayloadAction<ColorItem[]>) => {
            state.colors = action.payload;
            state.status = Status.SUCCESS;
        },
    },
});

export const { setColors } = colorSlice.actions;
export default colorSlice.reducer;
