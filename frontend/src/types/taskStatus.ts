export type TaskStatus = "Not Started" | "In Progress" | "Finished";

export const getTaskStatusName = (status: TaskStatus) => {
  let statusName;
  switch (status) {
    case "Not Started":
      statusName = "notStarted";
      break;
    case "In Progress":
      statusName = "inProgress";
      break;
    case "Finished":
      statusName = "finished";
      break;
    default:
      statusName = "";
  }
  return statusName;
};
