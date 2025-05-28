// import { GoogleGenAI, GenerateContentResponse } from "@google/genai"; // No longer needed
import { MuseumItem } from '../types';
import { MUSEUM_DATA } from '../constants';

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! }); // No longer needed

// Renamed function to reflect its new purpose
export const getHardcodedMuseumTopicContent = async (topicId: string): Promise<MuseumItem[]> => {
  // Simulate a short network delay for a more realistic loading experience
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const topicDataSeed = MUSEUM_DATA[topicId];
      if (topicDataSeed) {
        const items: MuseumItem[] = topicDataSeed.map((itemSeed, index) => ({
          ...itemSeed,
          imageUrl: `https://picsum.photos/seed/${itemSeed.id || topicId + index}/800/600?grayscale&blur=1`, // Added grayscale and slight blur to placeholders
          category: topicId,
        }));
        resolve(items);
      } else {
        console.error(`No hardcoded data found for topic: ${topicId}`);
        reject(new Error(`Content for "${topicId}" is currently unavailable.`));
      }
    }, 300 + Math.random() * 400); // 300-700ms delay
  });
};
