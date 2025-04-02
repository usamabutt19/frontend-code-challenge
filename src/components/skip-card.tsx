import { useState } from "react";
import { Skip } from "../common/skip-interface";
import { Fade, Zoom } from "react-awesome-reveal";
import { AlertTriangle, ArrowRight } from "lucide-react";

interface SkipCardProps {
  skip: Skip;
  onSelectSkip: (skipId: string) => void;
  isSelected: boolean;
}

export default function SkipCard({
  skip,
  onSelectSkip,
  isSelected,
}: SkipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-gray-900 rounded-lg p-2 md:p-4 overflow-hidden transition-all duration-300
        ${isSelected ? "border-2 border-blue-600" : "border-2 border-gray-800"}
        ${isHovered ? "shadow-lg shadow-blue-500/20 scale-[1.02]" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src="src/assets/skip.jpeg"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <Fade delay={100} cascade damping={0.1} triggerOnce>
          <div className="absolute top-4 right-2 md:right-4 bg-blue-600 text-white px-3 py-1 rounded-md font-medium">
            {skip.size} Yards
          </div>
        </Fade>
        {skip.privateProperty && (
          <div className="text-nowrap absolute text-xs bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-yellow-400 px-3 py-1 rounded-md font-medium flex items-center">
            <AlertTriangle className="mr-2 size-4" />
            Private Property Only
          </div>
        )}
      </div>
      <div className="p-3 md:p-6">
        <Fade triggerOnce>
          <h3
            className={`
            text-xl font-bold transition-all duration-300
            ${isHovered ? "text-blue-400" : "text-white"}
          `}
          >
            {skip.name}
          </h3>
          <p className="text-gray-400 mb-4">
            {skip.hirePeriod} day hire period
          </p>
        </Fade>
        <Zoom triggerOnce delay={100}>
          <div className="text-blue-500 text-2xl font-bold mb-4">
            £{skip.price}{" "}
            <span className="text-sm text-gray-400 font-normal">per week</span>
          </div>
        </Zoom>
        <button
          onClick={() => onSelectSkip(skip.id)}
          className={`w-full font-semibold py-3 px-4 rounded-md flex items-center justify-center transition-colors ${
            isSelected
              ? "bg-blue-600 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
        >
          {isSelected ? "Selected" : "Select This Skip"}
          {!isSelected && <ArrowRight className="ml-2 size-4" />}
        </button>
      </div>
    </div>
  );
}
