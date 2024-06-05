import { Activity } from "@/types/activity";
import { getAllPosts } from "./posts";
import { sortByDate } from "@/lib/sort-activity";

export function getAllActivities() {
  const posts = getAllPosts();
  const activities: Activity[] = [];
  posts.forEach((post) => {
    if (post.createdAt == post.updatedAt) {
      activities.push({ activity: "create", date: post.createdAt, post });
    } else {
      activities.push({ activity: "create", date: post.createdAt, post });
      activities.push({ activity: "update", date: post.updatedAt, post });
    }
  });
  activities.sort(sortByDate);
  activities.reverse();
  return activities;
}
