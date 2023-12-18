import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

interface SummaryItemsProps {
  summaryStep: number;
  text: string;
}

const SummaryItem: React.FC<SummaryItemsProps> = ({ summaryStep, text }) => {
  const { step } = useContext(QuizContext);

  return (
    <div className="flex items-center gap-3">
      <span
        className={
          "text-xs  font-semibold border-2 rounded-full h-8 w-8 flex items-center justify-center " +
          (step + 1 === summaryStep
            ? "bg-light-blue text-marine-blue border-light-blue"
            : "text-white border-pastel-blue")
        }
      >
        {summaryStep}
      </span>
      <div className="hidden md:flex flex-col">
        <h6 className="uppercase text-[11px] text-pastel-blue font-medium">
          step {summaryStep}
        </h6>
        <h4 className="uppercase font-semibold text-magnolia text-xs">
          {text}
        </h4>
      </div>
    </div>
  );
};

export default SummaryItem;
