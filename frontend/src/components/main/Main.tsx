import React from "react";
import { useSelector } from "react-redux";
import { tasksSelector, listsSelector } from "../../selectors";

import styles from "./Main.module.sass";

const Main = () => {
    const lists = useSelector(listsSelector);
    const tasks = useSelector(tasksSelector);

    return (
        <main className={styles.main}>
            {lists.map((list) => (
                <>
                    <h1>{list.name}</h1>
                    {tasks
                        .filter((task) => list.id === task.listId)
                        .map((task) => (
                            <p>{task.text}</p>
                        ))}
                </>
            ))}
        </main>
    );
};

export default Main;
