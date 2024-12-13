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
        {/* <div className={styles.contentsWrapper}> */}
        <article className={styles.listContents}>
          {/* <span className={styles.status}> {taskStatus.notStarted}</span> */}
          <TaskList status={taskStatus.notStarted} tasks={notStartedTasks} />
        </article>
        <article className={styles.listContents}>
          {/* <span className={styles.status}> {taskStatus.inProgress}</span> */}
          <TaskList status={taskStatus.inProgress} tasks={inProgressTasks} />
        </article>
        <article className={styles.listContents}>
          {/* <span className={styles.status}> {taskStatus.finished}</span> */}
          <TaskList status={taskStatus.finished} tasks={finishedTasks} />
        </article>
      </div>
      {/* </div> */}
    </Layout>
  );
}
