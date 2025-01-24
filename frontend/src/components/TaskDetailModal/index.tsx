import { Task } from "@/types/task";
import styles from "./style.module.scss";
import { getTaskStatusName } from "@/types/taskStatus";
import { switchEditModal } from "@/features/sideBar/sideBarSlice";
import { EditTasklModal } from "@/components/EditTaskModal";
import { useAppSelector, useAppDispatch } from "@/hooks";

type Props = {
  task: Task;
  closeModal: () => void;
  fetchTasks: () => void;
};

export const TaskDetailModal = ({ task, closeModal, fetchTasks }: Props) => {
  const dispatch = useAppDispatch();
  const statusName: string = getTaskStatusName(task.status);
  const isEditModal = useAppSelector((state) => state.SideBar.isEditModal);
  const closeEditModal = () => {
    closeModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      {isEditModal ? (
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${styles.taskTitle} ${styles[statusName]}`}>
            <h2>{task.title}</h2>
            <button
              className={styles.editButton}
              onClick={() => dispatch(switchEditModal())}
            >
              edit
            </button>
          </div>
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
      ) : (
        <EditTasklModal
          task={task}
          closeModal={() => closeEditModal()}
          fetchTasks={() => fetchTasks()}
        />
      )}
    </div>
  );
};
