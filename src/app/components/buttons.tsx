import { QuizContext } from "@/contexts/QuizContext";
import React, { useContext } from "react";

const Buttons: React.FC = () => {
  const { setStep, step, totalSteps } = useContext(QuizContext);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 fixed bottom-0 right-0 left-0 md:static md:p-0 md:mx-16">
      {step > 0 ? (
        <button
          type="button"
          className="text-cool-gray font-medium text-sm hover:text-marine-blue"
          onClick={handleBack}
        >
          Go Back
        </button>
      ) : (
        <span></span>
      )}

      {step < totalSteps - 1 ? (
        <button
          type="button"
          className="bg-marine-blue text-white border-none py-3 px-5 rounded-md text-xs font-medium hover:opacity-80"
          onClick={handleNext}
        >
          Next Step
        </button>
      ) : (
        <button
          type="button"
          className="bg-purplish-blue text-white border-none py-3 px-5 rounded-md text-xs font-medium hover:opacity-80"
          onClick={handleNext}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Buttons;
