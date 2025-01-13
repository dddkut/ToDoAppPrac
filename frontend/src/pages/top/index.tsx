import { GetServerSideProps } from "next";
import axios from "axios";
import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { Task } from "@/types/task";
import { TaskList } from "@/components/TaskList";
import { taskStatus } from "@/constants/taskStatus";
import { useEffect, useState } from "react";
import { TaskDetailModal } from "@/components/TaskDetailModal";
import axiosClient from "@/utils/axios.config";
// import { dummyTasks } from "@/constants/dummy/dummyTasks"; //TODO:バックエンドから取得する

export default function Top() {
  const [selectedTask, setSelectedTask] = useState<Task | null>();
  const [tasks, setTasks] = useState<Task[] | []>();
  const [notStartedTasks, setNotStartedTasks] = useState<Task[] | []>();
  const [inProgressTasks, setInProgressTasks] = useState<Task[] | []>();
  const [finishedTasks, setFinishedTasks] = useState<Task[] | []>();

  const NEST_API_BASE_URL =
    process.env.NEST_API_BASE_URL || "http://localhost:3001"; //TODO:変更する

  useEffect(() => {
    const fetchInitialTasks = async () => {
      try {
        const response = await axiosClient.get(`${NEST_API_BASE_URL}/task`);
        const data = response.data ?? [];

        setTasks(data);
      } catch (error) {
        console.error("Error on fetching tasks", error);
      }
    };

    fetchInitialTasks();
  }, []);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      console.log("tasks", tasks);
      // const notStarted = dummyTasks.filter(
      const notStarted = tasks.filter(
        (task) => task.status === taskStatus.notStarted
      );
      // const inProgress = dummyTasks.filter(
      const inProgress = tasks.filter(
        (task) => task.status === taskStatus.inProgress
      );
      // const finished = dummyTasks.filter(
      const finished = tasks.filter(
        (task) => task.status === taskStatus.finished
      );
      setNotStartedTasks(notStarted);
      setInProgressTasks(inProgress);
      setFinishedTasks(finished);
    }
  }, tasks);

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
