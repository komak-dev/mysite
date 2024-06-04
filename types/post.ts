export type Post = {
  slug: string;
  title: string;
  tags: string[] | undefined;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type FrontMatter = {
  title: string;
  tags: string[];
};
