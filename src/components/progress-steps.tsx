import {
  MapPin,
  Trash2,
  Package,
  FileCheck,
  Calendar,
  CreditCard,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep = 3 }: ProgressStepsProps) {
  const steps = [
    { icon: MapPin, label: "Postcode", step: 1 },
    { icon: Trash2, label: "Waste Type", step: 2 },
    { icon: Package, label: "Select Skip", step: 3 },
    { icon: FileCheck, label: "Permit Check", step: 4 },
    { icon: Calendar, label: "Choose Date", step: 5 },
    { icon: CreditCard, label: "Payment", step: 6 },
  ];

  return (
    <Fade triggerOnce>
      <div className="w-full overflow-x-auto mb-6">
        <div className="flex flex-wrap justify-between items-center min-w-max py-4 px-2">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div
                className={`flex items-center cursor-pointer ${
                  step.step <= currentStep ? "text-blue-500" : "text-gray-500"
                } ${step.step === currentStep ? "font-semibold" : ""}`}
              >
                <step.icon className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">{step.label}</span>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-2 sm:mx-4 h-px w-4 sm:w-8 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
