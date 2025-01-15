// import { Task } from "@/types/task";
import styles from "./style.module.scss";
// import { getTaskStatusName } from "@/types/taskStatus";
import { Form } from "../Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "@/types/task";

type Props = {
  closeModal: () => void;
};

export const RegisterTasklModal = ({ closeModal }: Props) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    // 登録APIの処理
    console.log(data);
  };

  const defaultValues: Task = {
    title: "",
    status: "Not Started",
    description: "",
    // due: "",
    inCharge: "",
    priority: "Low",
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Register a Task</h2>
        <Form
          handleSubmit={handleSubmit(onSubmit)}
          defaultValues={defaultValues}
          register={register}
        />
      </div>
    </div>
  );
};
