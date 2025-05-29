import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MuseumItem } from "../types";
import GlassCard from "./GlassCard";
import { CloseIcon } from "./icons/NavigationIcons";
import Image from "next/image";
import ProminentFigureSidebar from "./ProminentFigureSidebar";

interface DetailModalProps {
  item: MuseumItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
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

  if (!item) return null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-5xl max-h-[90vh] relative flex flex-col sm:flex-row overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <GlassCard className="w-full flex flex-col rounded-t-2xl">
              <div
                className={
                  item.prominentFigure ? "flex flex-col md:flex-row" : ""
                }
              >
                <div
                  className={item.prominentFigure ? "flex-1 min-w-0" : "w-full"}
                >
                  <div className="relative w-full h-[50vh] rounded-t-xl overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                    <button
                      onClick={onClose}
                      className="absolute top-3 right-3 z-10 glassmorphism p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      aria-label="Close details"
                    >
                      <CloseIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>
                  </div>
                  <div className="p-5 md:p-6 flex-grow overflow-y-auto">
                    <p className="text-sm text-gray-300 mb-1">{item.date}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h2>
                    <p className="text-base text-gray-200 whitespace-pre-line leading-relaxed">
                      {item.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            {item.prominentFigure && (
              <ProminentFigureSidebar figure={item.prominentFigure} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
