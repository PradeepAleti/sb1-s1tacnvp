import React from 'react';
import CreatePost from '../components/post/CreatePost';
import PostCard from '../components/post/PostCard';

const SAMPLE_POSTS = [
  {
    id: '1',
    userId: '1',
    username: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
    content: 'Just finished an amazing project! 🎉',
    likes: ['2', '3'],
    comments: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '2',
    username: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
    content: 'Looking for connections in the tech industry! Anyone interested in AI and machine learning?',
    images: ['https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop'],
    likes: ['1'],
    comments: [{ id: '1', userId: '1', content: 'Count me in!', createdAt: new Date().toISOString() }],
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

export default function Feed() {
  const handleLike = (postId: string) => {
    // Handle like functionality
  };

  const handleComment = (postId: string) => {
    // Handle comment functionality
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <CreatePost />
      
      <div className="space-y-4">
        {SAMPLE_POSTS.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
}