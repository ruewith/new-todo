export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export interface ColorState {
    colors: ColorItem[];
    status: Status | null;
}

export interface ColorItem {
    id: number;
    hex: string;
    name: string;
}

export interface ListState {
    lists: ListItem[];
    status: Status | null;
}

export interface ListItem {
    id: number;
    name: string;
    colorId: number;
}

export interface CreateListDTO {
    name: string;
    colorId: number;
}

export interface TaskState {
    tasks: TaskItem[];
    status: Status | null;
}

export interface TaskItem {
    id: number;
    listId: number;
    text: string;
    completed: boolean;
}

export interface CreateTaskDTO {
    listId: number;
    text: string;
    completed: boolean;
}
