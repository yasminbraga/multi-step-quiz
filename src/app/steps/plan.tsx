import { QuizContext } from "@/contexts/QuizContext";
import React, { FormEvent, useContext } from "react";
import FormContainer from "../components/formContainer";
import RadioWrapper from "../components/radioWrapper";
import Toggle from "../components/toggle";

const Plan: React.FC = () => {
  const { data, setData } = useContext(QuizContext);

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    setData({
      ...data,
      ["isPlanPeriodYear"]: !data.isPlanPeriodYear,
      ["plan"]: { type: "", price: 0 },
      ["total"]: 0,
    });
  };

  return (
    <FormContainer
      title="Select your plan"
      text="You have the option of monthly or yearly billing."
    >
      <RadioWrapper />

      <Toggle />
    </FormContainer>
  );
};

export default Plan;
