import { SafeUser } from "@/types/User";

type PostComment ={
  id: number;
  author: SafeUser;
  content: string;
  createdAt: string;
}


type Post = {
  id: number;
  author: SafeUser;
  content: string;
  image?: string;
  likes: number;
  comments: PostComment[];
  createdAt: string;
};

export type { Post, PostComment };