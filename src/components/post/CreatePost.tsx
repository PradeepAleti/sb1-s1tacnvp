import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export default function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    setContent('');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <Image size={20} />
            <span>Add Photo</span>
          </button>
          
          <button
            type="submit"
            disabled={!content.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Send size={16} />
            <span>Post</span>
          </button>
        </div>
      </form>
    </div>
  );
}