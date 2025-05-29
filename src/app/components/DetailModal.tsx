import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MuseumItem } from "../types";
import GlassCard from "./GlassCard";
import { CloseIcon } from "./icons/NavigationIcons";
import Image from "next/image";
import ProminentFigureSidebar from "./ProminentFigureSidebar";
import STDSymptomsSidebar from "./STDSymptomsSidebar";

interface DetailModalProps {
  item: MuseumItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={
                item.prominentFigure || item.category === "STDs"
                  ? "flex flex-col md:flex-row h-full max-h-[90vh] gap-0 md:gap-4"
                  : "h-full max-h-[90vh] overflow-y-auto"
              }
            >
              {/* Main Content - Glass Card */}
              <GlassCard
                className={`flex flex-col rounded-2xl overflow-hidden ${
                  item.prominentFigure || item.category === "STDs"
                    ? "flex-1 md:h-[90vh] md:overflow-y-auto"
                    : "w-full h-full"
                }`}
              >
                <div className="relative w-full flex-grow min-h-[200px] rounded-xl overflow-hidden flex-shrink-0">
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
                <div className="p-5 md:p-6 flex-grow-0">
                  <p className="text-sm text-gray-300 mb-1">{item.date}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-200 whitespace-pre-line leading-relaxed">
                    {item.longDescription}
                  </p>
                </div>
              </GlassCard>

              {/* Sidebar */}
              {(item.prominentFigure || item.category === "STDs") && (
                <div className="md:w-80 md:flex-shrink-0 md:h-[90vh] md:overflow-y-auto overflow-x-hidden">
                  {item.prominentFigure && (
                    <ProminentFigureSidebar figure={item.prominentFigure} />
                  )}
                  {item.category === "STDs" && item.symptoms && (
                    <STDSymptomsSidebar symptoms={item.symptoms} />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
