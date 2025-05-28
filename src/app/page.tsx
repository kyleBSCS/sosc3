"use client";

import { useState, useEffect, useCallback } from "react";
import { MuseumItem, ViewMode, MuseumTopic } from "./types";
import { TOPICS } from "./constants";
import { getHardcodedMuseumTopicContent } from "./services/geminiService"; // Updated import
import MainMenu from "./components/MainMenu";
import SlideshowView from "./components/SlideshowView";
import DetailModal from "./components/DetailModal";
import Background from "./components/Background";
import LoadingIndicator from "./components/LoadingIndicator";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("main_menu");
  const [selectedTopic, setSelectedTopic] = useState<MuseumTopic | null>(null);
  const [topicItems, setTopicItems] = useState<MuseumItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MuseumItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItemsForTopic = useCallback(async (topic: MuseumTopic) => {
    if (!topic) return;
    setIsLoading(true);
    setError(null);
    try {
      // Use hardcoded content service
      const items = await getHardcodedMuseumTopicContent(topic.id);
      setTopicItems(items);
      setCurrentView("slideshow");
    } catch (err) {
      console.error("Error fetching topic items:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to load museum exhibits. Please try again later.";
      setError(errorMessage);
      // Optionally, set empty items or specific error items
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
    setError(null);
    setCurrentView("main_menu");
  };

  const handleShowAbout = () => {
    alert(
      "The Human Tapestry Museum\n\nDeveloped by a World-Class Senior Frontend React Engineer.\n\nThis project showcases interactive UI/UX design for educational purposes using hardcoded content and Framer Motion for animations."
    );
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center">
      <Background />
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
              onShowAbout={handleShowAbout}
            />
          )}
          {currentView === "slideshow" && selectedTopic && (
            <SlideshowView
              topic={selectedTopic}
              items={topicItems}
              onItemSelect={handleItemSelect}
              onBackToMenu={handleBackToMenu}
            />
          )}
          {currentView === "detail" && selectedItem && (
            <DetailModal item={selectedItem} onClose={handleCloseDetail} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
