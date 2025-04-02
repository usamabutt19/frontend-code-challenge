import { ArrowRight } from "lucide-react";
import { Skip } from "../common/skip-interface";
import { Slide } from "react-awesome-reveal";

interface SkipFooterProps {
  selectedSkip: Skip | null;
  onBack: () => void;
  onContinue: () => void;
}

export default function SkipFooter({
  selectedSkip,
  onBack,
  onContinue,
}: SkipFooterProps) {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-3 px-4 z-10">
      <Slide delay={10} direction="up" triggerOnce>
        <div className="container mx-auto">
          <div className="flex flex-wrap md:flex-auto items-center justify-between">
            <div className="flex items-center justify-between md:justify-normal space-x-2 sm:space-x-6 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-bold text-white">
                  {selectedSkip.size}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-bold text-lg md:text-xl">
                  £{selectedSkip.price}
                </span>
              </div>
              <div className="flex flex-col items-center text-nowrap">
                <span className="text-gray-400 text-sm md:text-base">
                  7 day hire
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-end">
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors text-sm md:text-base"
              >
                Back
              </button>
              <button
                onClick={onContinue}
                className="px-4 md:px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white flex items-center transition-colors text-sm md:text-base"
              >
                Continue
                <ArrowRight className="ml-2 size-3 md:size-4" />
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
