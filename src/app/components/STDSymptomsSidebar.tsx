"use client";

import React from "react";
import { AlertTriangle, Activity, Heart, Brain } from "lucide-react";

interface STDSymptoms {
  common: string[];
  severe: string[];
  longTerm: string[];
  prevention: string[];
}

interface Props {
  symptoms: STDSymptoms;
}

const STDSymptomsSidebar: React.FC<Props> = ({ symptoms }) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* COMMON SYMPTOMS */}
      <aside className="w-full bg-black rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Activity />
            Common Symptoms
          </h4>
          <div className="space-y-2">
            {symptoms.common.map((symptom, i) => (
              <div key={i} className="p-2 bg-black/10 rounded-lg">
                <span className="text-gray-100 text-sm">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* SEVERE SYMPTOMS */}
      <aside className="w-full bg-black rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <AlertTriangle />
            Severe Symptoms
          </h4>
          <div className="space-y-2">
            {symptoms.severe.map((symptom, i) => (
              <div key={i} className="p-2 bg-black/10 rounded-lg">
                <span className="text-gray-100 text-sm">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* LONG-TERM EFFECTS */}
      <aside className="w-full bg-black rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Brain />
            Long-Term Effects
          </h4>
          <div className="space-y-2">
            {symptoms.longTerm.map((effect, i) => (
              <div key={i} className="p-2 bg-black/10 rounded-lg">
                <span className="text-gray-100 text-sm">{effect}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* PREVENTION */}
      <aside className="w-full bg-black rounded-2xl p-4 mt-6 md:mt-0 flex-shrink-0 flex flex-col items-center shadow-lg backdrop-blur-md">
        <div className="w-full mb-3">
          <h4 className="text-white font-semibold mb-2 text-2xl flex items-center gap-2">
            <Heart />
            Prevention
          </h4>
          <div className="space-y-2">
            {symptoms.prevention.map((method, i) => (
              <div key={i} className="p-2 bg-black/10 rounded-lg">
                <span className="text-gray-100 text-sm">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default STDSymptomsSidebar; 