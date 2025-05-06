
import React from 'react';

const VideoSection = () => {
  return (
    <section className="bg-brand-black py-12">
      <div className="container-custom">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-gray-900">
          {/* Placeholder for video - in a real scenario, this would be replaced with an actual video player */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Video progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div className="h-full w-1/3 bg-brand-lime"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
