"use client";

import React from "react";
import { Star } from "lucide-react";

interface FamousPerson {
  name: string;
  born: string;
  achievement?: string; // Add achievement property
  bio: string;
  imageUrl: string;
}

interface Props {
  famousPeople: FamousPerson[];
}

const IconicWomenSidebar: React.FC<Props> = ({ famousPeople }) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* FAMOUS PEOPLE */}
      <aside className="w-full bg-black rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-1.8xl flex items-center gap-2">
            <Star />
            Women In That Field
          </h4>
          <div className="space-y-4">
            {famousPeople.map((person, i) => (
              <div key={i} className="p-4 bg-black/10 rounded-lg flex flex-col items-center">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h5 className="text-gray-100 font-semibold text-lg">{person.name}</h5>
                  <p className="text-gray-400 text-sm">{person.born}</p>
                  <p className="text-gray-300 text-sm font-medium mt-2">Achievement:</p>
                  {person.achievement && (
                    <p className="text-gray-100 text-sm italic">{person.achievement}</p>
                  )}
                  <hr className="border-gray-600 my-3 w-full" />
                  <p className="text-gray-100 text-sm">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default IconicWomenSidebar;
