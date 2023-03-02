import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ListState, ListItem, Status } from "../@types";
import { getLists } from "../actions/list";

const initialState: ListState = {
    lists: [],
    status: null,
};

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setLists: (state: ListState, action: PayloadAction<ListItem[]>) => {
            state.lists = action.payload;
        },

        addList: (state: ListState, action: PayloadAction<ListItem>) => {
            state.lists.push(action.payload);
        },

        removeList: (state: ListState, action: PayloadAction<number>) => {
            state.lists = state.lists.filter((list) => list.id !== action.payload);
        },
    },
    extraReducers: {
        [getLists.pending.type]: (state: ListState) => {
            state.lists = [];
            state.status = Status.LOADING;
        },
        [getLists.fulfilled.type]: (state: ListState, action: PayloadAction<ListItem[]>) => {
            state.lists = action.payload;
            state.status = Status.SUCCESS;
        },
        [getLists.rejected.type]: (state: ListState) => {
            state.lists = [];
            state.status = Status.ERROR;
        },
    },
});

export const { setLists, addList, removeList } = listSlice.actions;
export default listSlice.reducer;
