export interface User {
  id: string;
  name: string;
  username: string;
  bio?: string;
  avatar?: string;
  coverPhoto?: string;
  connections: string[];
  interests: string[];
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  images?: string[];
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}