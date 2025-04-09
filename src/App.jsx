import React, { useState, useEffect } from 'react';
import Feedform from './Feedform';
import FeedbackList from './list';
import { MessageSquareText, List, Sun, Moon } from 'lucide-react';
import getFeedbacks from './getFeedback';
import postFeedbacks from './postFeedback';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    };
    load();
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSubmit = async (formData) => {
    const newData = {
      ...formData,
      created_at: new Date().toISOString()
    };
    await postFeedbacks(newData);
    setFeedbacks([newData, ...feedbacks]);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-black dark:via-black dark:to-black transition-all duration-500"
      style={{
        backgroundImage: isDark ? 'none' : `url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')`
      }}
    >
      <div className="min-h-screen backdrop-blur-xl bg-black/30 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 relative">
            <div className="absolute right-0 top-0"onClick={() => setIsDark(!isDark)}>
              <button
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                {isDark ? (
                  <Sun className="w-6 h-6 text-yellow-300" />
                ) : (
                  <Moon className="w-6 h-6 text-blue-300" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300">
              <MessageSquareText className="w-10 h-10 text-blue-400 dark:text-blue-300" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2 transition-spacing duration-300">Feedback Collector</h1>
          </div>

          <div className="bg-black/20 dark:bg-black/60 p-6 rounded-xl backdrop-blur-lg border border-white/10 dark:border-white/20 shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.01]">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowAdmin(!showAdmin)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-white/20 rounded-lg text-gray-200 hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <List className="w-4 h-4" />
                <span>{showAdmin ? 'Hide Feedback' : 'View Feedback'}</span>
              </button>
            </div>

            <div className="transition-height duration-300 ease-in-out">
              {showAdmin ? (
                <FeedbackList feedbacks={feedbacks} />
              ) : (
                <Feedform onSubmit={handleSubmit} />
              )}
            </div>
          </div>

          <footer className="mt-8 text-center text-gray-400 dark:text-gray-300 text-sm">
            <div className="bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/30">
              Created by Aravind Bollapragada © 2025 
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;