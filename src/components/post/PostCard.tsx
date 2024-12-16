import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Post } from '../../types/user';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
}

export default function PostCard({ post, onLike, onComment }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          src={post.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{post.username}</h3>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
          <p className="mt-2 text-gray-800">{post.content}</p>
          
          {post.images && post.images.length > 0 && (
            <div className="mt-3">
              <img
                src={post.images[0]}
                alt=""
                className="rounded-lg w-full object-cover max-h-96"
              />
            </div>
          )}
          
          <div className="mt-4 flex items-center space-x-4">
            <button
              onClick={() => onLike(post.id)}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Heart size={20} />
              <span>{post.likes.length}</span>
            </button>
            
            <button
              onClick={() => onComment(post.id)}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <MessageCircle size={20} />
              <span>{post.comments.length}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}