import React, { useState } from 'react';
import { VideoUploader } from './components/VideoUploader';
import { ComicPreview } from './components/ComicPreview';
import { Film, Wand2 } from 'lucide-react';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleVideoSelect = (file: File) => {
    setSelectedVideo(file);
    // Simulate AI processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="w-8 h-8 text-blue-500" />
            <Wand2 className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Video to Comic Converter
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your videos into stunning comic-style stories using AI.
            Upload your video and watch as it generates beautiful comic panels with
            matching subtitles.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {!selectedVideo && <VideoUploader onVideoSelect={handleVideoSelect} />}

          {selectedVideo && (
            <div className="w-full flex flex-col items-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">
                  Selected video: {selectedVideo.name}
                </p>
              </div>
              <ComicPreview isLoading={isProcessing} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;