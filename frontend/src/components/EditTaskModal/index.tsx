import styles from "./style.module.scss";
import { Form } from "../Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "@/types/task";
import axiosClient from "@/utils/axios.config";
import { switchEditModal } from "@/features/sideBar/sideBarSlice";
import { useAppDispatch } from "@/hooks";

type Props = {
  task: Task;
  closeModal: () => void;
  fetchTasks: () => void;
};

const NEST_API_BASE_URL =
  process.env.NEST_API_BASE_URL || "http://localhost:3001"; //TODO:変更する

export const EditTasklModal = ({ task, closeModal, fetchTasks }: Props) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = async (data: Task) => {
    try {
      const result = await axiosClient.patch(
        `${NEST_API_BASE_URL}/task/${data.id}`,
        data
      );
      closeModal();
      fetchTasks();
      //TODO: 完了時のお知らせを出す
    } catch (error) {
      console.error("Error on task registeration", error);
    }
  };

  const defaultValues: Task = {
    id: task.id,
    title: task.title ?? "",
    status: task.status,
    description: task.description ?? "",
    due: task.due,
    inCharge: task.inCharge ?? "",
    priority: task.priority ?? undefined,
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Edit Task</h2>
        <Form
          handleSubmit={handleSubmit(onSubmit)}
          defaultValues={defaultValues}
          register={register}
        />
        <button
          className={styles.cancelButton}
          onClick={() => dispatch(switchEditModal())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
