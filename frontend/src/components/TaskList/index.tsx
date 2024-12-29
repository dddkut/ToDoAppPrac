import { Task } from "@/types/task";
import styles from "./styles.module.scss";
import { TaskStatus, getTaskStatusName } from "@/types/taskStatus";

type Props = {
  status: TaskStatus;
  tasks?: Task[];
  openModal: (selectedTask: Task) => void;
};

export const TaskList = ({ status, tasks, openModal }: Props) => {
  const statusName: string = getTaskStatusName(status);

  return (
    <div className={styles.taskContainer}>
      <div className={`${styles.statusWrapper} ${styles[statusName]}`}>
        <span className={styles.status}>{status}</span>
      </div>
      <ul className={styles.taskList}>
        {tasks &&
          tasks.map((task) => (
            <li className={styles.task} onClick={() => openModal(task)}>
              {task.title}
            </li>
          ))}
      </ul>
    </div>
  );
};
