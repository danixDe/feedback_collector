import React from 'react';
import { MessageSquare } from 'lucide-react';

function FeedbackList({ feedbacks }) {
  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="p-4 bg-white/10 border border-gray-200/20 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <h3 className="font-medium text-gray-200">{feedback.name}</h3>
            </div>
            <time className="text-sm text-gray-400">
              {new Date(feedback.created_at).toLocaleDateString()}
            </time>
          </div>
          <p className="mt-2 text-gray-300">{feedback.message}</p>
          <p className="mt-2 text-sm text-gray-400">{feedback.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;