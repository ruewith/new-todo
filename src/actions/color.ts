import { createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "../api";

export const getColors = createAsyncThunk("colors/getColors", async (_, { rejectWithValue }) => {
    try {
        const { data } = await todoService.getColors();
        return data;
    } catch (error) {
        rejectWithValue(error);
    }
});
