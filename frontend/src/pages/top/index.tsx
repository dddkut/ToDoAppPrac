import { GetServerSideProps } from "next";
import axios from "axios";
import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { Task } from "@/types/task";
import { TaskList } from "@/components/TaskList";
import { taskStatus } from "@/constants/taskStatus";
import { useState } from "react";
import { TaskDetailModal } from "@/components/TaskDetailModal";

import { dummyTasks } from "@/constants/dummy/dummyTasks"; //TODO:バックエンドから取得する

type Props = {
  tasks: Task[];
};

export default function Top({ tasks }: Props) {
  const [selectedTask, setSelectedTask] = useState<Task | null>();
  console.log(tasks);
  // const notStartedTasks = dummyTasks.filter(
  const notStartedTasks = tasks.filter(
    (task) => task.status === taskStatus.notStarted
  );
  // const inProgressTasks = dummyTasks.filter(
  const inProgressTasks = tasks.filter(
    (task) => task.status === taskStatus.inProgress
  );
  // const finishedTasks = dummyTasks.filter(
  const finishedTasks = tasks.filter(
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
export const getServerSideProps: GetServerSideProps = async () => {
  const TASK_API_BASE_URL = "http://localhost:3000/api/task"; //TODO:変更する
  try {
    console.log("aaaaaaaaaa!!!!!!!!!!!!!!!!!!!");
    const data = await axios.get(`${TASK_API_BASE_URL}`);
    console.log(data);

    return {
      props: {
        tasks: data,
      },
    };
  } catch (error) {
    return {
      props: {
        tasks: [],
      },
    };
  }
};
