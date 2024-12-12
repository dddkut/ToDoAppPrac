import { Priority } from "./priority";

export type Task = {
  id: string;
  title: string;
  description?: string;
  due?: number;
  inCharge?: string; //TODO: 担当者(メンバー)の型を考える
  category?: string; //TODO: カテゴリーの型を考える
  priority?: Priority;
};
