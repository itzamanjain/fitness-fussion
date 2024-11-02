import React from 'react';
import { Code2, User } from 'lucide-react';
import { useStore } from '@/store';

export function Header() {
  const { isAuthenticated, user } = useStore();

  return (
    <header className="bg-gray-800 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">PythonTutor</span>
          </div>
          
          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">{user?.name}</span>
              </div>
              <button 
                onClick={() => useStore.setState({ isAuthenticated: false, user: null })}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}