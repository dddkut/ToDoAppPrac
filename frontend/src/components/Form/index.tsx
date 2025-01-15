import { priority } from "@/constants/priority";
import styles from "./style.module.scss";
import { Task } from "@/types/task";
import { taskStatus } from "@/constants/taskStatus";
import { UseFormRegister } from "react-hook-form";

type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  defaultValues: Task; //TODO:input用のTask型を作成するか考える　idなし　dueはstring
  register: UseFormRegister<Task>;
};

export const Form = ({ handleSubmit, defaultValues, register }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>TITLE</span>
        <input
          type="text"
          id="title"
          defaultValue={defaultValues.title}
          {...register("title", { required: "Title is required" })}
        />
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>STATUS</span>
        <select
          id="status"
          defaultValue={defaultValues.status}
          {...register("status", { required: "Status is required" })}
        >
          <option value={taskStatus.notStarted}>{taskStatus.notStarted}</option>
          <option value={taskStatus.inProgress}>{taskStatus.inProgress}</option>
          <option value={taskStatus.finished}>{taskStatus.finished}</option>
        </select>
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>DESCRIPTION</span>
        <textarea
          id="description"
          defaultValue={defaultValues.description}
          {...register("description")}
        />
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>DUE DATE</span>
        <input
          type="datetime-local"
          id="due"
          defaultValue={defaultValues.due}
          {...register("due")}
        />
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>PERSON IN CHARGE</span>
        <input
          type="text"
          id="inCharge"
          defaultValue={defaultValues.inCharge}
          {...register("inCharge")}
        />
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.contentTitle}>PRIORITY</span>
        {/* <select name="priority" defaultValue={priority.Middle}> */}
        <select id="priority" {...register("priority")}>
          <option value={""}>select</option>
          <option value={priority.High}>{priority.High}</option>
          <option value={priority.Middle}>{priority.Middle}</option>
          <option value={priority.Low}>{priority.Low}</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
