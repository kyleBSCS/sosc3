"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TriggerWarningModalProps {
  isOpen: boolean;
  onAcknowledge: () => void;
  onDecline: () => void;
}

const TriggerWarningModal: React.FC<TriggerWarningModalProps> = ({
  isOpen,
  onAcknowledge,
  onDecline,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            style={{ maxWidth: '500px', backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
            className="backdrop-blur-md rounded-2xl p-6 w-full mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Content Warning</h2>
            <p className="text-lg mb-4">
              This section contains information about sexually transmitted diseases (STDs) and related topics.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm">Topics covered include:</p>
              <ul className="text-sm space-y-1">
                <li>• Medical information about STDs</li>
                <li>• Historical context and public health responses</li>
                <li>• Social and cultural impacts</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAcknowledge}
                style={{ backgroundColor: '#dc2626' }}
                className="px-6 py-2 rounded-lg text-white font-medium transition-all"
              >
                I understand and wish to continue
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDecline}
                className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors text-white"
              >
                Return to Menu
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TriggerWarningModal; 