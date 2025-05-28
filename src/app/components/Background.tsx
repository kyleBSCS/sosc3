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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1.5, delay: Math.random() * 0.5 }}
    />
  );
};

const Background: React.FC<BackgroundProps> = ({
  meshGradientClass = "rainbow-mesh-gradient",
}) => {
  const placeholders = [
    { className: "top-[10%] left-[5%] rotate-[-8deg]", seed: "bg1" },
    { className: "top-[5%] right-[8%] rotate-[5deg]", seed: "bg2" },
    { className: "bottom-[8%] left-[12%] rotate-[3deg]", seed: "bg3" },
    { className: "bottom-[15%] right-[5%] rotate-[-6deg]", seed: "bg4" },
    {
      className: "top-[35%] left-[30%] rotate-[2deg] hidden md:block",
      seed: "bg5",
    },
    {
      className: "bottom-[30%] right-[25%] rotate-[4deg] hidden md:block",
      seed: "bg6",
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
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
