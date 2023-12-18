import { QuizContext } from "@/contexts/QuizContext";
import { FormEvent, useContext } from "react";

const Toggle: React.FC = () => {
  const { data, setData } = useContext(QuizContext);

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    setData({
      ...data,
      ["isPlanPeriodYear"]: !data.isPlanPeriodYear,
      ["plan"]: { type: "", price: 0 },
      ["total"]: 0,
      ["adds"]: [
        { name: "online service", checked: false, price: 0 },
        { name: "larger storage", checked: false, price: 0 },
        { name: "customizable profile", checked: false, price: 0 },
      ],
    });
  };
  return (
    <div className="bg-magnolia flex justify-center items-center p-2 rounded-lg gap-4 my-6">
      <span className="text-marine-blue text-sm font-medium">Monthly</span>
      <label className="relative items-center inline-flex cursor-pointer mx-2">
        <input
          type="radio"
          onClick={handleSetValue}
          checked={data.isPlanPeriodYear}
          className="sr-only peer"
          readOnly
        />
        <span className="w-11 h-6 bg-marine-blue rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-marine-blue"></span>
      </label>
      <span className="text-cool-gray text-sm font-medium">Yearly</span>
    </div>
  );
};

export default Toggle;
