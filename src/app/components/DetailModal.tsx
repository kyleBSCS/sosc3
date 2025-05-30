import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MuseumItem } from "../types";
import GlassCard from "./GlassCard";
import { CloseIcon } from "./icons/NavigationIcons";
import Image from "next/image";
import ProminentFigureSidebar from "./ProminentFigureSidebar";
import STDSymptomsSidebar from "./STDSymptomsSidebar";
import GenderFluiditySidebar from "./GenderFluiditySidebar";
import ReferencesModal from "./ReferencesModal";

interface DetailModalProps {
  item: MuseumItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  if (!item) return null;

  const hasReferences = item.referenceUrl && item.referenceUrl.length > 0;

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div
              className={
                item.prominentFigure || item.category === "STDs" || item.category === "gender_fluidity"
                  ? "flex flex-col md:flex-row h-full max-h-[90vh] gap-0 md:gap-4"
                  : "h-full max-h-[90vh] overflow-y-auto "
              }
            >
              {/* Main Content - Glass Card */}
              <GlassCard
                className={`flex flex-col rounded-2xl overflow-hidden ${
                  item.prominentFigure || item.category === "STDs" || item.category === "gender_fluidity"
                    ? "flex-1 md:h-[90vh] md:overflow-y-auto"
                    : "w-full h-full"
                }`}
              >
                <div
                  className={`relative w-full flex-grow rounded-xl overflow-hidden flex-shrink-0 ${
                    item.prominentFigure
                      ? "min-h-[200px]"
                      : "min-h-[350px] md:min-h-[400px]"
                  }`}
                >
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
                  <p className="text-base text-gray-200 whitespace-pre-line leading-relaxed mb-4">
                    {item.longDescription}
                  </p>
                  {/* References Button */}
                  {hasReferences && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => setIsReferencesModalOpen(true)}
                        className="glassmorphism px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors duration-300 text-sm font-medium border border-white/20"
                      >
                        View References ({item.referenceUrl!.length})
                      </button>
                    </div>
                  )}
                </div>
              </GlassCard>

              {/* Sidebar */}
              {(item.prominentFigure || item.category === "STDs" || item.category === "gender_fluidity") && (
                <div className="md:w-80 md:flex-shrink-0 md:h-[90vh] md:overflow-y-auto overflow-x-hidden">
                  {item.prominentFigure && (
                    <ProminentFigureSidebar figure={item.prominentFigure} />
                  )}
                  {item.category === "STDs" && item.symptoms && (
                    <STDSymptomsSidebar symptoms={item.symptoms} />
                  )}
                  {item.category === "gender_fluidity" && item.famousPeople && (
                    <GenderFluiditySidebar famousPeople={item.famousPeople} />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* References Modal */}
      <ReferencesModal
        isOpen={isReferencesModalOpen}
        onClose={() => setIsReferencesModalOpen(false)}
        references={item?.referenceUrl || []}
        title={item?.title || ""}
      />
    </>
  );
};

export default DetailModal;
