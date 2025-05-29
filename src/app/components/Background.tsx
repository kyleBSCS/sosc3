import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlaceholderProps {
  className: string;
}

interface BackgroundProps {
  meshGradientClass?: string;
}

const placeholderImages = [
  "/stonewall.webp",
  "/card1.webp",
  "/card2.webp",
  "/card3.webp",
  "/card4.webp",
];

const BlurredPlaceholder: React.FC<PlaceholderProps & { image: string }> = ({
  className,
  image,
}) => {
  return (
    <motion.div
      className={`absolute w-48 h-32 md:w-64 md:h-48 bg-gray-500/20 rounded-lg filter blur-lg opacity-30 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      initial={{ opacity: 0, scale: 0.5, y: 20, rotate: -10 }}
      animate={{
        opacity: 0.25,
        scale: 1,
        y: 0,
        rotate: 0,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: Math.random() * 0.8,
      }}
    />
  );
};

const Background: React.FC<BackgroundProps> = ({
  meshGradientClass = "rainbow-mesh-gradient",
}) => {
  const placeholders = [
    { className: "top-[10%] left-[5%]", seed: "bg1" },
    { className: "top-[5%] right-[8%]", seed: "bg2" },
    { className: "bottom-[8%] left-[12%]", seed: "bg3" },
    { className: "bottom-[15%] right-[5%]", seed: "bg4" },
    {
      className: "top-[35%] left-[30%] hidden md:block",
      seed: "bg5",
    },
    {
      className: "bottom-[30%] right-[25%] hidden md:block",
      seed: "bg6",
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={meshGradientClass}
          className={`absolute inset-0 w-full h-full ${meshGradientClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {placeholders.map((p, i) => (
        <BlurredPlaceholder
          key={i}
          className={p.className}
          image={placeholderImages[i % placeholderImages.length]}
        />
      ))}
    </div>
  );
};

export default Background;
