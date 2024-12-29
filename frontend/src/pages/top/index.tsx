import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { Task } from "@/types/task";
import { TaskList } from "@/components/TaskList";
import { taskStatus } from "@/constants/taskStatus";
import { useState } from "react";
import { TaskDetailModal } from "@/components/TaskDetailModal";

import { dummyTasks } from "@/constants/dummy/dummyTasks"; //バックエンドから取得する

export default function Top() {
  const [selectedTask, setSelectedTask] = useState<Task | null>();

  const notStartedTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.notStarted
  );
  const inProgressTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.inProgress
  );
  const finishedTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.finished
  );

  const openModal = (task: Task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.notStarted}
            tasks={notStartedTasks}
            openModal={openModal}
          />
        </article>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.inProgress}
            tasks={inProgressTasks}
            openModal={openModal}
          />
        </article>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.finished}
            tasks={finishedTasks}
            openModal={openModal}
          />
        </article>
      </div>
      {selectedTask && (
        <TaskDetailModal task={selectedTask} closeModal={closeModal} />
      )}
    </Layout>
  );
}
