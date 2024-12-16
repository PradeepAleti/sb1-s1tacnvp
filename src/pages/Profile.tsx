import React from 'react';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop"
          alt="Cover"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces"
          alt="Profile"
          className="absolute -bottom-16 left-4 w-32 h-32 rounded-full border-4 border-white"
        />
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">David Chen</h1>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        <p className="mt-4 text-gray-800">
          Building amazing things with code. Passionate about web development and open source.
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin size={16} />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <LinkIcon size={16} />
            <a href="#" className="text-blue-600 hover:underline">github.com/davidchen</a>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar size={16} />
            <span>Joined March 2024</span>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <div>
            <span className="font-bold">1,234</span>
            <span className="text-gray-600 ml-1">Connections</span>
          </div>
          <div>
            <span className="font-bold">567</span>
            <span className="text-gray-600 ml-1">Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}