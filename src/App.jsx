import React, { useState, useEffect } from 'react';
import Feedform from './Feedform';
import FeedbackList from './list';
import { MessageSquareText, List } from 'lucide-react';
import  getFeedbacks  from './getFeedback';
import  postFeedbacks  from './postFeedback';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const load = async()=>{
      const data = await getFeedbacks();
      setFeedbacks(data);
    };
    load();
  }, []);

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
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')`
      }}
    >
      <div className="min-h-screen backdrop-blur-xl bg-black/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MessageSquareText className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Feedback Collector</h1>
          </div>

          <div className="bg-black/20 p-6 rounded-xl backdrop-blur-lg border border-white/10 shadow-2xl">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowAdmin(!showAdmin)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-gray-200 hover:bg-white/20 transition-colors"
              >
                <List className="w-4 h-4" />
                <span>{showAdmin ? 'Hide Feedback' : 'View Feedback'}</span>
              </button>
            </div>

            {showAdmin ? (
              <FeedbackList feedbacks={feedbacks} />
            ) : (
              <Feedform onSubmit={handleSubmit} />
            )}
          </div>

          <footer className="mt-8 text-center text-gray-400 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
              Created by Aravind Bollapragada © 2025 
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
