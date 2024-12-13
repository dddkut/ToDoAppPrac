import { TaskStatus } from "@/types/taskStatus";

export const taskStatus: Record<
  "notStarted" | "inProgress" | "finished",
  TaskStatus
> = {
  notStarted: "Not Started",
  inProgress: "In Progress",
  finished: "Finished",
};
