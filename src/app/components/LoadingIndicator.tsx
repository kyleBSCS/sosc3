
import React from 'react';
import { motion } from 'framer-motion';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-pink-500 border-r-purple-500 border-b-indigo-500 border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="ml-4 text-xl font-semibold text-white">Loading Exhibits...</p>
    </div>
  );
};

export default LoadingIndicator;
