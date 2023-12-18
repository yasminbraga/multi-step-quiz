import React from "react";
import SummaryItem from "./summaryItem";

const Summary: React.FC = () => {
  return (
    <div className="absolute bg-pattern-mobile bg-cover h-36 bg-no-repeat pt-6 w-full md:h-auto md:static md:bg-pattern-desktop md:bg-cover md:max-w-[260px] md:p-6 md:pr-12 md:rounded-md">
      <div className="flex justify-center gap-5 md:flex-col">
        <SummaryItem summaryStep={1} text="your info" />
        <SummaryItem summaryStep={2} text="select plan" />
        <SummaryItem summaryStep={3} text="add-ons" />
        <SummaryItem summaryStep={4} text="summary" />
      </div>
    </div>
  );
};

export default Summary;
