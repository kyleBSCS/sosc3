import React from "react";
import { ProminentFigure } from "../types";
import { Calendar, Star, User } from "lucide-react";

interface Props {
  figure: ProminentFigure;
}

const ProminentFigureSidebar: React.FC<Props> = ({ figure }) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* TITLE */}
      <aside className="w-full bg-white/10 rounded-2xl p-4  mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <User />
            Title
          </h4>
          <span>American writer and civil rights activist</span>
        </div>
      </aside>

      {/* BORN AND DIED */}
      <aside className="w-full bg-white/10 rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
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
      <aside className="w-full bg-white/10 rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Star />
            Important Works
          </h4>
          <div className="space-y-3">
            {figure.works.map((work, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 bg-white/5 rounded-lg"
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-12 h-16 object-cover rounded-md flex-shrink-0"
                />
                <span className="text-gray-100 text-sm">{work.title}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* KEY EVENTS */}
      <aside className="w-full bg-white/10 rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Calendar />
            Key Events
          </h4>
          <div className="space-y-3">
            {figure.events.map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 bg-white/5 rounded-lg"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                />
                <span className="text-gray-100 text-sm">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProminentFigureSidebar;
