import axios from "axios";
import { ColorItem, TaskItem, ListItem } from "../@types";

const instance = axios.create({
    baseURL: `http://localhost:5000`,
    withCredentials: true,
});

const todoService = {
    getColors: () => {
        return instance.get<ColorItem[]>("/colors");
    },

    getLists: () => {
        return instance.get<ListItem[]>("/lists");
    },

    createList: (item: ListItem) => {
        return instance.post<ListItem>("/lists", item);
    },

    deleteList: (id: number) => {
        return instance.delete<number>(`/lists/${id}`);
    },

    getTasks: () => {
        return instance.get<TaskItem[]>("/tasks");
    },
};

export default todoService;
