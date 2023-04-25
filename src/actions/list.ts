import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListItem } from "../@types";

import todoService from "../api";
import { addList, removeList } from "../store/list.reducer";

export const getLists = createAsyncThunk("lists/getLists", async (_, { rejectWithValue }) => {
    try {
        const { data } = await todoService.getLists();
        return data;
    } catch (error) {
        rejectWithValue(`Не удалось получить списки: ${error}`);
    }
});

export const createList = createAsyncThunk(
    "lists/createList",
    async (item: ListItem, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await todoService.createList(item);
            dispatch(addList(data));
        } catch (error) {
            rejectWithValue(`Не удалось создать список: ${error}`);
        }
    }
);

export const deleteList = createAsyncThunk("lists/deleteList", async (id: number, { dispatch, rejectWithValue }) => {
    try {
        await todoService.deleteList(id);
        dispatch(removeList(id));
    } catch (error) {
        rejectWithValue(`Не удалось удалить список: ${error}`);
    }
});
