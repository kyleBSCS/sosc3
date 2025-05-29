import React from "react";
import { ProminentFigure } from "../types";
import { Calendar, Star, User } from "lucide-react";

interface Props {
  figure: ProminentFigure;
}

const ProminentFigureSidebar: React.FC<Props> = ({ figure }) => {
  return (
    <div className="flex flex-col gap-0 sm:gap-2">
      {/* TITLE */}
      <aside className="w-full md:w-80 bg-white/10 rounded-2xl p-4 md:ml-6 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <User />
            Title
          </h4>
          <span>American writer and civil rights activist</span>
        </div>
      </aside>

      {/* BORN AND DIED */}
      <aside className="w-full md:w-80 bg-white/10 rounded-2xl p-4 md:ml-6 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center  gap-2">
            <Calendar />
            Born and Died
          </h4>
          <span className="flex p-2 bg-white/10 rounded-lg items-center justify-between">
            <span>{figure.born}</span>
            <span>{figure.died}</span>
          </span>
          <span className="w-full flex justify-center text-gray-100 text-sm mt-4">
            Age:{" "}
            {(() => {
              const born = new Date(figure.born);
              const died = new Date(figure.died);
              const age = died.getFullYear() - born.getFullYear();
              const monthDiff = died.getMonth() - born.getMonth();
              return monthDiff < 0 ||
                (monthDiff === 0 && died.getDate() < born.getDate())
                ? age - 1
                : age;
            })()}{" "}
            years
          </span>
        </div>
      </aside>

      {/* IMPORTANT WORKS */}
      <aside className="w-full md:w-80 bg-white/10 rounded-2xl p-4 md:ml-6 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Star />
            Important Works
          </h4>
          <ul className="list-disc list-inside text-gray-100 text-sm">
            {figure.works.map((work, i) => (
              <li key={i}>{work}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* KEY EVENTS */}
      <aside className="w-full md:w-80 bg-white/10 rounded-2xl p-4 md:ml-6 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Calendar />
            Key Events
          </h4>
          <ul className="list-disc list-inside text-gray-100 text-sm">
            {figure.events.map((event, i) => (
              <li key={i}>{event}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ProminentFigureSidebar;
