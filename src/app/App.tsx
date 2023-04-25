import React, { FC, useEffect } from "react";

import styles from "./App.module.sass";

import Sidebar from "../components/sidebar";
import { useAppDispatch } from "../store";
import { getLists } from "../actions/list";
import { getColors } from "../actions/color";
import { getTasks } from "../actions/task";
import Main from "../components/main";

const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getColors());
        dispatch(getLists());
        dispatch(getTasks());
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.layout}>
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};

export default App;
