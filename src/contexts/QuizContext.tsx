"use client";
import Adds from "@/app/steps/adds";
import Info from "@/app/steps/info";
import Plan from "@/app/steps/plan";
import Summary from "@/app/steps/summary";
import { ReactNode, createContext, useState } from "react";

type PropsType = {
  children: ReactNode;
};

type QuizContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  steps: Record<number, ReactNode>;
  totalSteps: number;
  data: QuizDataType;
  setData: React.Dispatch<React.SetStateAction<QuizDataType>>;
};

export type AddsType = {
  name: string;
  checked: boolean;
  price: number;
};

type QuizDataType = {
  name: string;
  email: string;
  phone: string;
  isPlanPeriodYear: boolean;
  plan: {
    type: string;
    price: number;
  };
  adds: AddsType[];
  total: number;
};

export const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }: PropsType) => {
  const [step, setStep] = useState(0);

  const steps = {
    0: <Info />,
    1: <Plan />,
    2: <Adds />,
    3: <Summary />,
  };

  const totalSteps = Object.keys(steps).length;

  const [data, setData] = useState<QuizDataType>({
    name: "",
    email: "",
    phone: "",
    isPlanPeriodYear: false,
    plan: { type: "", price: 0 },
    adds: [
      { name: "online service", checked: false, price: 0 },
      { name: "larger storage", checked: false, price: 0 },
      { name: "customizable profile", checked: false, price: 0 },
    ],
    total: 0,
  });
  return (
    <QuizContext.Provider
      value={{ step, setStep, steps, totalSteps, data, setData }}
    >
      {children}
    </QuizContext.Provider>
  );
};
