import { Task } from "@/types/task";
import styles from "./styles.module.scss";
import { TaskStatus } from "@/types/taskStatus";

export const ListContainer = (statusName: TaskStatus, task: Task) => {
  return (
    <article className={styles.containerWrapper}>
      {" "}
      {/* //TODO:onClickでモーダル出す */}
      <span>{statusName}</span>
      <hr></hr>
      <span>{task.title}</span>
    </article>
  );
};
