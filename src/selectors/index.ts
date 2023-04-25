import { RootState } from "../store";

export const colorsSelector = (state: RootState) => state.color.colors;
export const listsSelector = (state: RootState) => state.list.lists;
export const tasksSelector = (state: RootState) => state.task.tasks;
