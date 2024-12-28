import { Task } from "@/types/task";
import styles from "./styles.module.scss";
import { TaskStatus } from "@/types/taskStatus";
import { useState } from "react";

type Props = {
  status: TaskStatus;
  tasks?: Task[];
};

export const TaskList = ({ status, tasks }: Props) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>();

  const openModal = (task: Task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <article className={styles.taskContainer}>
      <span className={styles.status}>{status}</span>
      {/* //TODO:onClickでモーダル出す */}
      <ul className={styles.taskList}>
        {tasks &&
          tasks.map((task) => (
            <li className={styles.task} onClick={() => openModal(task)}>
              {task.title}
            </li>
          ))}
      </ul>
    </article>
  );
};
