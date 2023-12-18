import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

interface CheckboxType {
  title: string;
  text: string;
  value: string;
  addPrice: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
}

const CheckboxInput: React.FC<CheckboxType> = ({
  title,
  text,
  value,
  addPrice,
  onChange,
  name,
}) => {
  const { data } = useContext(QuizContext);

  return (
    <label
      htmlFor=""
      className={`flex w-full items-center border border-light-gray rounded-md px-5 py-4 ${
        data.adds.find((add) => add.name === JSON.parse(value).name)?.checked &&
        "bg-alabaster border-purplish-blue"
      }`}
    >
      <input
        type="checkbox"
        onChange={onChange}
        checked={
          data.adds.find((add) => add.name === JSON.parse(value).name)?.checked
        }
        value={value}
      />
      <div className="ml-6 mr-auto">
        <h6 className="font-medium text-marine-blue text-sm">{title}</h6>
        <p className="text-cool-gray text-xs">{text}</p>
      </div>
      <span className="text-purplish-blue text-xs justify-self-end">
        +${addPrice}/{data.isPlanPeriodYear ? "yr" : "mo"}
      </span>
    </label>
  );
};

export default CheckboxInput;
