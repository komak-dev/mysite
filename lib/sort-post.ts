import { Post } from "@/types/post";

export function sortByCreatedAt(p1: Post, p2: Post) {
  const p1_created_at = Date.parse(p1.createdAt);
  const p2_created_at = Date.parse(p2.createdAt);
  if (p1_created_at < p2_created_at) {
    return -1;
  } else if (p1_created_at > p2_created_at) {
    return 1;
  } else {
    return 0;
  }
}

export function sortByUpdatedAt(p1: Post, p2: Post) {
  const p1_updated_at = Date.parse(p1.updatedAt);
  const p2_updated_at = Date.parse(p2.updatedAt);
  if (p1_updated_at < p2_updated_at) {
    return -1;
  } else if (p1_updated_at > p2_updated_at) {
    return 1;
  } else {
    return 0;
  }
}

