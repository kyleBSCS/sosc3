import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import { CloseIcon } from "./icons/NavigationIcons";

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  references: string[];
  title: string;
}

const ReferencesModal: React.FC<ReferencesModalProps> = ({
  isOpen,
  onClose,
  references,
  title,
}) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  const extractDomain = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="references-backdrop"
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            key="references-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-2xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard className="rounded-2xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    References for {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="glassmorphism p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    aria-label="Close references"
                  >
                    <CloseIcon className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {references.map((url, index) => (
                    <div
                      key={index}
                      className="glassmorphism rounded-lg p-4 hover:bg-white/20 transition-colors duration-300 backdrop-blur-md"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-blue-300 font-semibold text-sm bg-blue-500/20 px-2 py-1 rounded flex-shrink-0">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 text-sm mb-2">
                            {extractDomain(url)}
                          </p>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm break-words underline decoration-blue-400/50 hover:decoration-blue-300"
                          >
                            {url}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {references.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-400">
                      No references available for this item.
                    </p>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferencesModal;
