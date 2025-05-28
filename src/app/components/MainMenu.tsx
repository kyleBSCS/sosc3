import React from "react";
import { motion } from "framer-motion";
import { MuseumTopic, ViewMode } from "../types";
import GlassCard from "./GlassCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MainMenuProps {
  topics: MuseumTopic[];
  onTopicSelect: (topic: MuseumTopic) => void;
  setCurrentView: (view: ViewMode) => void;
  onShowAbout: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({
  topics,
  onTopicSelect,
  setCurrentView,
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
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/*  Cards */}
      <Image
        src="/card1.webp"
        alt="Decorative Card 1"
        width={240}
        height={340}
        className="hidden md:block absolute -top-10 -left-10 z-0 shadow-xl rotate-[-12deg]"
        priority
      />
      <Image
        src="/card2.webp"
        alt="Decorative Card 2"
        width={240}
        height={340}
        className="hidden md:block absolute top-20 -right-10 z-0 shadow-xl rotate-[10deg]"
        priority
      />
      <Image
        src="/card3.webp"
        alt="Decorative Card 3"
        width={240}
        height={340}
        className="hidden md:block absolute -bottom-10 left-15 z-0 shadow-xl rotate-[-6deg]"
        priority
      />
      <Image
        src="/card4.webp"
        alt="Decorative Card 3"
        width={240}
        height={340}
        className="hidden md:block absolute bottom-12 right-15 z-0 shadow-xl rotate-[-2deg]"
        priority
      />
      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-center w-full max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <GlassCard className="px-8 py-6 md:px-12 md:py-10 rounded-t-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
              THE HUMAN TAPESTRY
            </h1>
            <p className="mt-3 md:mt-4 text-lg md:text-2xl text-gray-200">
              A Museum of Gender Stories
            </p>
          </GlassCard>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-white max-w-2xl mx-auto mb-8 md:mb-12 px-4"
        >
          Weave through the intricate history of gender, celebrating the diverse
          narratives of women and the LGBTQ+ community. Experience the journey
          from traditional understandings to the expansive landscape of gender
          fluidity and self-discovery.
        </motion.p>

        {/* Shadcn Carousel */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-6xl mb-8 md:mb-"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {topics.map((topic) => (
                <CarouselItem
                  key={topic.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.button
                    onClick={() => onTopicSelect(topic)}
                    className="glassmorphism w-full text-left rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 overflow-hidden"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <div className="relative h-40 md:h-48 w-full">
                      <Image
                        src={topic.imageUrl}
                        alt={topic.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                        {topic.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-gray-100 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {topic.description}
                      </p>
                    </div>
                  </motion.button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glassmorphism border-none bg-white/10 hover:bg-white/20 text-white -left-12 md:-left-16" />
            <CarouselNext className="glassmorphism border-none bg-white/10 hover:bg-white/20 text-white -right-12 md:-right-16" />
          </Carousel>
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
    </div>
  );
};

export default MainMenu;
