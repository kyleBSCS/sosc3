import React from "react";
import { motion } from "framer-motion";
import { MuseumTopic } from "../types";
import GlassCard from "./GlassCard";

interface MainMenuProps {
  topics: MuseumTopic[];
  onTopicSelect: (topic: MuseumTopic) => void;
  onShowAbout: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
  topics,
  onTopicSelect,
  onShowAbout,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-center w-full max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8 md:mb-12">
        <GlassCard className="px-8 py-6 md:px-12 md:py-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            The Human Tapestry
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl text-gray-200">
            A Museum of Gender Stories
          </p>
        </GlassCard>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 px-4"
      >
        Weave through the intricate history of gender, celebrating the diverse
        narratives of women and the LGBTQ+ community. Experience the journey
        from traditional understandings to the expansive landscape of gender
        fluidity and self-discovery.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-8">
        {topics.map((topic) => (
          <motion.button
            key={topic.id}
            variants={itemVariants}
            onClick={() => onTopicSelect(topic)}
            className="glassmorphism w-full text-left p-4 md:p-6 rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {topic.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300 mt-1">
              {topic.description}
            </p>
          </motion.button>
        ))}
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={onShowAbout}
        className="glassmorphism text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-white/20 focus:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        About the Developers
      </motion.button>
    </motion.div>
  );
};

export default MainMenu;
