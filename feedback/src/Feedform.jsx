import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from './lib/utils';

function Feedform({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-gray-200/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Aravind B"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-gray-200/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="arvix@gmail.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
          Feedback Message
        </label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-gray-200/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-32 resize-none"
          placeholder="Your feedback here..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          "w-full px-4 py-2 text-white rounded-lg backdrop-blur-sm flex items-center justify-center space-x-2 transition-all",
          isLoading
            ? "bg-blue-500/50 cursor-not-allowed"
            : "bg-blue-500/80 hover:bg-blue-600/80"
        )}
      >
        <span>{isLoading ? 'Submitting...' : 'Submit Feedback'}</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

export default Feedform;