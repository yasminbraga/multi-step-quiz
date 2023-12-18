import { QuizContext } from "@/contexts/QuizContext";
import Image from "next/image";
import React, { useContext } from "react";

interface RadioInputType {
  imageSrc: string;
  planPrice: number;
  inputValue: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioInput: React.FC<RadioInputType> = ({
  imageSrc,
  inputValue,
  planPrice,
  type,
  onChange,
}) => {
  const { data } = useContext(QuizContext);

  return (
    <label
      htmlFor={type}
      className={`flex gap-3 border border-light-gray p-3 rounded-md w-full cursor-pointer md:flex-col hover:border-purplish-blue ${
        data.plan.type === type && "bg-alabaster border-purplish-blue"
      }`}
    >
      <Image
        src={imageSrc}
        alt={type}
        width={40}
        height={40}
        className="md:mb-8"
      />
      <div>
        <h6 className="text-marine-blue capitalize font-medium text-sm mb-1">
          {type}
        </h6>
        <p className="text-cool-gray text-xs">
          ${planPrice}/{data.isPlanPeriodYear ? "yr" : "mo"}
        </p>
        {data.isPlanPeriodYear ? (
          <p className="text-marine-blue text-xs mt-1">2 months free</p>
        ) : (
          ""
        )}
        <input
          type="radio"
          id={type}
          className="hidden"
          value={inputValue}
          checked={data.plan.type === type}
          onChange={onChange}
        />
      </div>
    </label>
  );
};

export default RadioInput;
