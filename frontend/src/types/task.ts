import { Priority } from "./priority";
import { TaskStatus } from "./taskStatus";
export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  description?: string;
  due?: number;
  inCharge?: string; //TODO: 担当者(メンバー)の型を考える
  category?: string; //TODO: カテゴリーの型を考える
  priority?: Priority;
};
