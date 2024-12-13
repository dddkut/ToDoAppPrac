import { Task } from "@/types/task";
import styles from "./styles.module.scss";
import { TaskStatus } from "@/types/taskStatus";

type Props = {
  status: TaskStatus;
  tasks?: Task[];
};

export const TaskList = ({ status, tasks }: Props) => {
  return (
    <article className={styles.taskContainer}>
      <span className={styles.status}>{status}</span>
      {/* //TODO:onClickでモーダル出す */}
      <ul className={styles.taskList}>
        {tasks &&
          tasks.map((task) => <li className={styles.task}>{task.title}</li>)}
      </ul>
    </article>
  );
};
