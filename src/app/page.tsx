"use client";

import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";
import Buttons from "./components/buttons";
import Summary from "./components/summary";

export default function Page() {
  const { step, steps, totalSteps } = useContext(QuizContext);
  return (
    <main className="min-h-screen w-full md:flex md:justify-center md:items-center">
      <section className="relative flex justify-center w-full md:bg-white md:rounded-lg md:shadow md:p-3 md:static md:max-w-[900px] md:h-[560px]">
        <Summary />

        <div className="absolute top-20 h-full w-full md:static">
          {steps[step]}
          {step === totalSteps - 1 ? "" : <Buttons />}
        </div>
      </section>
    </main>
  );
}
