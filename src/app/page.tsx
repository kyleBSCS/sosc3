"use client";

import { useState, useCallback } from "react";
import { MuseumItem, ViewMode, MuseumTopic } from "./types";
import { TOPICS } from "./constants";
import { MUSEUM_DATA } from "./constants";
import MainMenu from "./components/MainMenu";
import SlideshowView from "./components/SlideshowView";
import DetailModal from "./components/DetailModal";
import Background from "./components/Background";
import LoadingIndicator from "./components/LoadingIndicator";
import AboutModal from "./components/AboutModal";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("main_menu");
  const [selectedTopic, setSelectedTopic] = useState<MuseumTopic | null>(null);
  const [topicItems, setTopicItems] = useState<MuseumItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MuseumItem | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItemsForTopic = useCallback((topic: MuseumTopic) => {
    if (!topic) return;
    setIsLoading(true);
    setError(null);
    setCurrentCarouselIndex(0);
    try {
      // Directly get items from MUSEUM_DATA and map to MuseumItem
      const items = (MUSEUM_DATA[topic.id] || []).map((item) => ({
        ...item,
        category: topic.id,
      }));
      setTopicItems(items);
      setCurrentView("slideshow");
    } catch (err) {
      console.error("Error fetching topic items:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to load museum exhibits. Please try again later.";
      setError(errorMessage);
      setTopicItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleTopicSelect = (topic: MuseumTopic) => {
    setSelectedTopic(topic);
    fetchItemsForTopic(topic);
  };

  const handleItemSelect = (item: MuseumItem) => {
    setSelectedItem(item);
    setCurrentView("detail");
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    setCurrentView("slideshow");
  };

  const handleBackToMenu = () => {
    setSelectedTopic(null);
    setTopicItems([]);
    setSelectedItem(null);
    setCurrentCarouselIndex(0);
    setError(null);
    setCurrentView("main_menu");
  };

  const handleShowAbout = () => {
    setCurrentView("about");
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center">
      <Background
        meshGradientClass={(() => {
          if (selectedTopic) {
            switch (selectedTopic.id) {
              case "lgbtq_pioneers":
                return "rainbow-mesh-gradient";
              case "queer_history_moments":
                return "yellow-mesh-gradient";
              case "gender_fluidity":
                return "violet-pink-mesh-gradient";
              case "womens_history_unsung":
                return "pink-mesh-gradient";
              default:
                return "rainbow-mesh-gradient";
            }
          }
          return "rainbow-mesh-gradient";
        })()}
      />
      {isLoading && <LoadingIndicator />}

      {!isLoading && error && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glassmorphism p-8 rounded-xl shadow-2xl z-50 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Error</h2>
          <p className="text-lg">{error}</p>
          <button
            onClick={handleBackToMenu}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md"
          >
            Back to Menu
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {currentView === "main_menu" && (
            <MainMenu
              topics={TOPICS}
              onTopicSelect={handleTopicSelect}
              setCurrentView={setCurrentView}
              onShowAbout={handleShowAbout}
            />
          )}
          {currentView === "slideshow" && selectedTopic && (
            <SlideshowView
              topic={selectedTopic}
              items={topicItems}
              currentIndex={currentCarouselIndex}
              onIndexChange={setCurrentCarouselIndex}
              onItemSelect={handleItemSelect}
              onBackToMenu={handleBackToMenu}
            />
          )}
          {currentView === "detail" && selectedItem && (
            <DetailModal item={selectedItem} onClose={handleCloseDetail} />
          )}
          {currentView === "about" && (
            <AboutModal onBackToMenu={handleBackToMenu} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
