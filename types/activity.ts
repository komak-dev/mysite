import { Post } from "./post";

export type Activity = {
  activity: "create" | "update";
  date: string;
  post: Post;
};
