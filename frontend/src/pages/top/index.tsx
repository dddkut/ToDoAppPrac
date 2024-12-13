import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { TaskList } from "@/components/TaskList";
import { taskStatus } from "@/constants/taskStatus";

import { dummyTasks } from "@/constants/dummy/dummyTasks"; //バックエンドから取得する

export default function Top() {
  const notStartedTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.notStarted
  );
  const inProgressTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.inProgress
  );
  const finishedTasks = dummyTasks.filter(
    (task) => task.status === taskStatus.finished
  );

  return (
    <Layout>
      <div className={styles.container}>
        <article className={styles.listContents}>
          <TaskList status={taskStatus.notStarted} tasks={notStartedTasks} />
        </article>
        <article className={styles.listContents}>
          <TaskList status={taskStatus.inProgress} tasks={inProgressTasks} />
        </article>
        <article className={styles.listContents}>
          <TaskList status={taskStatus.finished} tasks={finishedTasks} />
        </article>
      </div>
    </Layout>
  );
}
