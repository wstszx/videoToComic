import React from 'react';
import { BookOpen } from 'lucide-react';

interface ComicPreviewProps {
  isLoading: boolean;
}

export function ComicPreview({ isLoading }: ComicPreviewProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?auto=format&fit=crop&w=600&q=80"
            alt="Comic panel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Scene 1</h3>
            <p className="text-gray-600">
              The hero stands atop a skyscraper, overlooking the city lights
              below...
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Generated from timestamp: 00:00:15
          </div>
        </div>
      </div>
    </div>
  );
}