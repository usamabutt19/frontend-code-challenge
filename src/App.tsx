import { useState, useEffect } from "react";
import SkipGrid from "./components/skip-grid";
import { Skip } from "./common/skip-interface";
import SkipFooter from "./components/footer";
import { Fade } from "react-awesome-reveal";
import ProgressSteps from "./components/progress-steps";

export default function SkipSelection() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch skip data");
        }

        const data = await response.json();

        const transformedData: Skip[] = data.map(
          (skip: Record<string, string>) => ({
            id: skip.id,
            name: `${skip.size} Yard Skip`,
            size: skip.size,
            price: skip.price_before_vat + skip.vat,
            hirePeriod: skip.hire_period_days,
            privateProperty: !skip.allowed_on_road,
          })
        );

        setSkips(transformedData);
      } catch (err) {
        console.error("Error fetching skip data:", err);
        setError("Failed to load skip options. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelectSkip = (skipId: string) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const handleBack = () => {
    setSelectedSkipId(null);
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      console.log(`Proceeding with skip ID: ${selectedSkipId}`);
    }
  };

  // Find the selected skip object
  const selectedSkip = selectedSkipId
    ? skips.find((skip) => skip.id === selectedSkipId) || null
    : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-7xl mx-auto px-4 py-6">
        {/* Progress Steps */}
        <ProgressSteps currentStep={3} />

        {/* Main Content */}
        <Fade triggerOnce>
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Skip Size</h1>
            <p className="text-gray-400">
              Select the skip size that best suits your needs
            </p>
          </div>
        </Fade>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <SkipGrid
            skips={skips}
            onSelectSkip={handleSelectSkip}
            selectedSkipId={selectedSkipId}
          />
        )}
      </div>
      {/* Footer */}
      <SkipFooter
        selectedSkip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
}
