import React from "react";
import { motion } from "framer-motion";
import { MuseumItem } from "../types";
import GlassCard from "./GlassCard";

interface SlideCardProps {
  item: MuseumItem;
  isCurrent: boolean; // To potentially style the current card differently if needed via props
  // onSelect is now handled by the parent motion.div in SlideshowView
}

const SlideCard: React.FC<SlideCardProps> = ({ item, isCurrent }) => {
  return (
    <motion.div
      className="w-full h-full relative"
      // Hover effect is now managed by the parent in SlideshowView for better coordination
      // but individual hover on current card can be refined here if needed
    >
      {/* Image fills the entire card and acts as background */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        draggable="false"
      />
      {/* GlassCard now only for text content, positioned at the bottom with z-index */}
      <GlassCard className="absolute bottom-0 left-0 right-0 z-50 p-3 md:p-4 rounded-b-lg">
        {/* Text content */}
        <div>
          <p className="text-[0.6rem] sm:text-xs text-gray-100 mb-0.5">
            {item.date}
          </p>
          <h3
            className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight truncate"
            title={item.title}
          >
            {item.title}
          </h3>
          <p className="text-[0.6rem] sm:text-xs text-gray-200 line-clamp-2 md:line-clamp-3">
            {item.shortDescription}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default SlideCard;
