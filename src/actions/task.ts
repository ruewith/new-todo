import { createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "../api";

export const getTasks = createAsyncThunk("tasks/getTasks", async (_, { rejectWithValue }) => {
    try {
        const { data } = await todoService.getTasks();
        return data;
    } catch (error) {
        rejectWithValue(`Не удалось получить задачи: ${error}`);
    }
});
