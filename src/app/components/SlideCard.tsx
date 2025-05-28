import React from "react";
import { motion } from "framer-motion";
import { MuseumItem } from "../types";
import GlassCard from "./GlassCard";
import Image from "next/image";

interface SlideCardProps {
  item: MuseumItem;
  isCurrent: boolean;
}

const SlideCard: React.FC<SlideCardProps> = ({ item, isCurrent }) => {
  return (
    <motion.div className="w-full h-full relative">
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-lg"
        priority={isCurrent}
        quality={85}
      />

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
