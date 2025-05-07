
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-pink-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
