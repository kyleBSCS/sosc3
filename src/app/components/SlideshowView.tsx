"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { MuseumItem, MuseumTopic } from "../types";
import SlideCard from "./SlideCard";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons/NavigationIcons";

interface SlideshowViewProps {
  topic: MuseumTopic;
  items: MuseumItem[];
  onItemSelect: (item: MuseumItem) => void;
  onBackToMenu: () => void;
}

const SlideshowView: React.FC<SlideshowViewProps> = ({
  topic,
  items,
  onItemSelect,
  onBackToMenu,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // For animation hint: 1 for next, -1 for prev

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + newDirection;
        if (newIndex < 0) newIndex = items.length - 1;
        else if (newIndex >= items.length) newIndex = 0;
        return newIndex;
      });
    },
    [items.length]
  );

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      paginate(1); // Swipe left, go to next
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1); // Swipe right, go to prev
    }
  };

  const handleCardClick = (index: number, item: MuseumItem) => {
    if (index === currentIndex) {
      onItemSelect(item);
    } else {
      const newDirection =
        index > currentIndex
          ? currentIndex === 0 && index === items.length - 1
            ? -1
            : 1
          : currentIndex === items.length - 1 && index === 0
          ? 1
          : -1;

      // Adjust direction for wrap around with more than 2 items
      if (items.length > 2) {
        if (Math.abs(index - currentIndex) > items.length / 2) {
          setDirection(index < currentIndex ? 1 : -1);
        } else {
          setDirection(index > currentIndex ? 1 : -1);
        }
      } else {
        setDirection(newDirection);
      }
      setCurrentIndex(index);
    }
  };

  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h2 className="text-2xl font-semibold mb-4">
          No exhibits found for "{topic.title}"
        </h2>
        <p className="text-gray-300 mb-6">
          There might be an issue fetching data or this topic is currently
          empty.
        </p>
        <button
          onClick={onBackToMenu}
          className="glassmorphism py-2 px-6 rounded-lg hover:bg-white/20 transition-colors duration-300 shadow-md text-lg"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden">
      <button
        onClick={onBackToMenu}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-30 glassmorphism p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors duration-300 shadow-lg"
        aria-label="Back to menu"
      >
        <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />{" "}
        <span className="sr-only">Back to Menu</span>
      </button>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
      >
        {topic.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 md:mb-4 text-center"
      >
        Exhibit {currentIndex + 1} of {items.length}
      </motion.p>

      {/* Carousel Container */}
      <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center perspective">
        <AnimatePresence initial={false} custom={direction}>
          {items.map((item, index) => {
            let offset = index - currentIndex;
            // Handle wrapping for offsets for determining visibility and position
            if (items.length > 2) {
              // Avoid issues with 1 or 2 items
              if (Math.abs(offset) > items.length / 2) {
                offset =
                  offset > 0 ? offset - items.length : offset + items.length;
              }
            }

            // Determine transform based on offset from currentIndex
            let variants;
            if (offset === 0) {
              // Current item
              variants = {
                x: "0%",
                scale: 1,
                opacity: 1,
                zIndex: 2,
                rotateY: 0,
                filter: "blur(0px)",
              };
            } else if (offset === -1) {
              // Previous item
              variants = {
                x: "-55%",
                scale: 0.75,
                opacity: 0.6,
                zIndex: 1,
                rotateY: 35,
                filter: "blur(1px)",
              };
            } else if (offset === 1) {
              // Next item
              variants = {
                x: "55%",
                scale: 0.75,
                opacity: 0.6,
                zIndex: 1,
                rotateY: -35,
                filter: "blur(1px)",
              };
            } else if (offset === -2) {
              // Prev-Prev item
              variants = {
                x: "-90%",
                scale: 0.6,
                opacity: 0.3,
                zIndex: 0,
                rotateY: 45,
                filter: "blur(2px)",
              };
            } else if (offset === 2) {
              // Next-Next item
              variants = {
                x: "90%",
                scale: 0.6,
                opacity: 0.3,
                zIndex: 0,
                rotateY: -45,
                filter: "blur(2px)",
              };
            } else {
              // Hidden items far away
              variants = {
                x: offset > 0 ? "150%" : "-150%",
                scale: 0.5,
                opacity: 0,
                zIndex: 0,
                rotateY: offset > 0 ? -60 : 60,
                filter: "blur(3px)",
              };
            }
            // Only render a few cards for performance if many items
            if (Math.abs(offset) > 2 && items.length > 5) return null;

            return (
              <motion.div
                key={item.id} // Use item.id for stable key for AnimatePresence
                className="absolute w-3/5 sm:w-1/2 md:w-2/5 lg:w-[30%] aspect-[9/13]" // Taller aspect ratio
                custom={direction}
                initial={{ opacity: 0, scale: 0.5 }} // Generic initial for new items
                animate={variants}
                exit={{
                  // Define exit animation based on direction for smoother transitions
                  x: direction > 0 ? "-150%" : "150%",
                  opacity: 0,
                  scale: 0.5,
                  rotateY: direction > 0 ? 60 : -60,
                  filter: "blur(3px)",
                  transition: { duration: 0.3 },
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                drag={offset === 0 ? "x" : false} // Only current item is draggable
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(index, item)}
                whileHover={
                  offset !== 0
                    ? {
                        scale: variants.scale * 1.05,
                        opacity: variants.opacity * 1.1,
                        y: "-2%",
                      }
                    : { scale: 1.03 }
                }
              >
                <SlideCard item={item} isCurrent={index === currentIndex} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center mt-4 md:mt-6 space-x-6 z-20">
        <button
          onClick={() => paginate(-1)}
          className="glassmorphism p-3 rounded-full hover:bg-white/20 transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
          disabled={items.length <= 1}
        >
          <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="glassmorphism p-3 rounded-full hover:bg-white/20 transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
          disabled={items.length <= 1}
        >
          <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-3 md:mt-4 text-xs sm:text-sm text-gray-400"
      >
        {items.length > 1 ? "Click or drag cards to navigate. " : ""}Click card
        to learn more.
      </motion.p>
    </div>
  );
};

export default SlideshowView;
