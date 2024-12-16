import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Bell, MessageCircle, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">Connect</Link>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/" icon={<Home size={20} />} />
            <NavLink to="/network" icon={<Users size={20} />} />
            <NavLink to="/messages" icon={<MessageCircle size={20} />} />
            <NavLink to="/notifications" icon={<Bell size={20} />} />
            <NavLink to="/profile" icon={<User size={20} />} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon }: { to: string; icon: React.ReactNode }) {
  return (
    <Link 
      to={to}
      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
    >
      {icon}
    </Link>
  );
}