import { QuizContext } from "@/contexts/QuizContext";
import React, { FormEvent, useContext } from "react";
import RadioInput from "./radioInput";

const RadioWrapper: React.FC = () => {
  const { data, setData } = useContext(QuizContext);

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const plan = JSON.parse(target.value);
    setData({
      ...data,
      ["plan"]: { type: plan.type, price: plan.price },
      ["total"]: plan.price,
    });
  };
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <RadioInput
        imageSrc="/icon-arcade.svg"
        inputValue={JSON.stringify({
          type: "arcade",
          price: data.isPlanPeriodYear ? 90 : 9,
        })}
        type="arcade"
        planPrice={data.isPlanPeriodYear ? 90 : 9}
        onChange={handleSetValue}
      />

      <RadioInput
        imageSrc="/icon-advanced.svg"
        inputValue={JSON.stringify({
          type: "advanced",
          price: data.isPlanPeriodYear ? 120 : 12,
        })}
        type="advanced"
        planPrice={data.isPlanPeriodYear ? 120 : 12}
        onChange={handleSetValue}
      />

      <RadioInput
        imageSrc="/icon-pro.svg"
        inputValue={JSON.stringify({
          type: "pro",
          price: data.isPlanPeriodYear ? 150 : 15,
        })}
        type="pro"
        planPrice={data.isPlanPeriodYear ? 150 : 15}
        onChange={handleSetValue}
      />
    </div>
  );
};

export default RadioWrapper;
