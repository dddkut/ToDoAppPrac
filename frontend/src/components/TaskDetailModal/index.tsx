import { Task } from "@/types/task";
import styles from "./style.module.scss";
import { getTaskStatusName } from "@/types/taskStatus";
import { switchEditModal } from "@/features/sideBar/sideBarSlice";

type Props = {
  task: Task;
  closeModal: () => void;
  switchEditModal: () => void;
};

export const TaskDetailModal = ({ task, closeModal }: Props) => {
  const statusName: string = getTaskStatusName(task.status);

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={`${styles.taskTitle} ${styles[statusName]}`}>
          {task.title}
        </h2>
        <button
          className={styles.contentWrapper}
          onClick={() => switchEditModal()}
        >
          edit
        </button>
        <div className={styles.contentWrapper}>
          <span className={styles.contentTitle}>STATUS</span>
          <p className={styles.taskContent}>{task.status}</p>
        </div>
        {task.description ? (
          <div className={styles.contentWrapper}>
            <span className={styles.contentTitle}>DESCRIPTION</span>
            <p className={styles.taskContent}>{task.description}</p>
          </div>
        ) : null}
        {task.due ? (
          <div className={styles.contentWrapper}>
            <span className={styles.contentTitle}>DUE DATE</span>
            <p className={styles.taskContent}>{task.due}</p>
          </div>
        ) : null}
        {task.inCharge ? (
          <div className={styles.contentWrapper}>
            <span className={styles.contentTitle}>PERSON IN CHARGE</span>
            <p className={styles.taskContent}>{task.inCharge}</p>
          </div>
        ) : null}
        {task.priority ? (
          <div className={styles.contentWrapper}>
            <span className={styles.contentTitle}>PRIORITY</span>
            <p className={styles.taskContent}>{task.priority}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
