import { Fade } from "react-awesome-reveal";
import { Skip } from "../common/skip-interface";
import SkipCard from "./skip-card";

interface SkipGridProps {
  skips: Skip[];
  onSelectSkip: (skipId: string) => void;
  selectedSkipId: string | null;
}

export default function SkipGrid({
  skips,
  onSelectSkip,
  selectedSkipId,
}: SkipGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-48">
      {skips.map((skip, index) => (
        <Fade
          key={skip.id}
          direction="up"
          triggerOnce
          fraction={0.1}
          delay={index * 50} // Staggered delay
          cascade={false}
        >
          <SkipCard
            skip={skip}
            onSelectSkip={onSelectSkip}
            isSelected={selectedSkipId === skip.id}
          />
        </Fade>
      ))}
    </div>
  );
}
