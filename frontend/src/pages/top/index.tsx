import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { Task } from "@/types/task";
import { TaskList } from "@/components/TaskList";
import { taskStatus } from "@/constants/taskStatus";
import { useEffect, useState } from "react";
import { TaskDetailModal } from "@/components/TaskDetailModal";
import axiosClient from "@/utils/axios.config";
import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  switchRegisterModal,
  switchEditModal,
} from "@/features/sideBar/sideBarSlice";
import { RegisterTasklModal } from "@/components/RegisterTaskModal";

export default function Top() {
  const dispatch = useAppDispatch();
  const isRegisterModal = useAppSelector(
    (state) => state.SideBar.isRegisterModal
  );
  const [selectedTask, setSelectedTask] = useState<Task | null>();
  const [tasks, setTasks] = useState<Task[] | []>();
  const [notStartedTasks, setNotStartedTasks] = useState<Task[] | []>();
  const [inProgressTasks, setInProgressTasks] = useState<Task[] | []>();
  const [finishedTasks, setFinishedTasks] = useState<Task[] | []>();

  const NEST_API_BASE_URL =
    process.env.NEST_API_BASE_URL || "http://localhost:3001"; //TODO:変更する

  const fetchTasks = async () => {
    try {
      const response = await axiosClient.get(`${NEST_API_BASE_URL}/task`);
      const data = response.data ?? [];

      setTasks(data);
    } catch (error) {
      console.error("Error on fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      const notStarted = tasks.filter(
        (task) => task.status === taskStatus.notStarted
      );
      const inProgress = tasks.filter(
        (task) => task.status === taskStatus.inProgress
      );
      const finished = tasks.filter(
        (task) => task.status === taskStatus.finished
      );
      setNotStartedTasks(notStarted);
      setInProgressTasks(inProgress);
      setFinishedTasks(finished);
    }
  }, tasks);

  const openTaskDetailModal = (task: Task) => {
    setSelectedTask(task);
  };

  const closeTaskDetailModal = () => {
    setSelectedTask(null);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.notStarted}
            tasks={notStartedTasks}
            openModal={openTaskDetailModal}
          />
        </article>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.inProgress}
            tasks={inProgressTasks}
            openModal={openTaskDetailModal}
          />
        </article>
        <article className={styles.listContents}>
          <TaskList
            status={taskStatus.finished}
            tasks={finishedTasks}
            openModal={openTaskDetailModal}
          />
        </article>
      </div>
      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          closeModal={closeTaskDetailModal}
          fetchTasks={() => fetchTasks()}
        />
      )}
      {isRegisterModal && (
        <RegisterTasklModal
          closeModal={() => dispatch(switchRegisterModal())}
          fetchTasks={() => fetchTasks()}
        />
      )}
    </Layout>
  );
}
