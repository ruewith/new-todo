import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskState, TaskItem, Status } from "../@types";
import { getTasks } from "../actions/task";

const initialState: TaskState = {
    tasks: [],
    status: null,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTasks: (state: TaskState, action: PayloadAction<TaskItem[]>) => {
            state.tasks = action.payload;
        },
    },
    extraReducers: {
        [getTasks.fulfilled.type]: (state: TaskState, action: PayloadAction<TaskItem[]>) => {
            state.tasks = action.payload;
            state.status = Status.SUCCESS;
        },
    },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;
