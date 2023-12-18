import { AddsType, QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";
import FormContainer from "../components/formContainer";

const Summary: React.FC = () => {
  const { data } = useContext(QuizContext);

  const listAdds = data.adds.filter((add) => add.checked === true);

  const getAddsTotal = (total: number, item: AddsType) => {
    return total + item.price;
  };

  const total = listAdds.reduce(getAddsTotal, data.total);

  return (
    <FormContainer
      title="Finishing up"
      text="Double-check everything looks OK before confirming"
    >
      <section className="bg-magnolia rounded-md p-3">
        <div className="flex justify-between border-b border-light-gray pb-4">
          <div>
            <h5 className="text-marine-blue font-medium text-base">
              {data.plan.type}
              {data.isPlanPeriodYear ? "(Yearly)" : "(Monthly)"}
            </h5>
            <button className="text-cool-gray underline text-sm">Change</button>
          </div>
          <span className="text-marine-blue font-medium">
            ${data.plan.price}/{data.isPlanPeriodYear ? "yr" : "mo"}
          </span>
        </div>

        {listAdds.map((add) => (
          <div key={add.name} className="flex justify-between pt-4">
            <h5 className="text-cool-gray">{add.name}</h5>
            <span className="text-marine-blue text-sm">
              +$ {add.price}/{data.isPlanPeriodYear ? "yr" : "mo"}
            </span>
          </div>
        ))}
      </section>
      <section>
        <div className="flex justify-between p-4">
          <h5 className="text-cool-gray text-sm font-medium">
            Total {data.isPlanPeriodYear ? "(per year)" : "(per month)"}
          </h5>
          <span className="text-purplish-blue font-semibold text-base">
            +$ {total}/{data.isPlanPeriodYear ? "yr" : "mo"}
          </span>
        </div>
      </section>
    </FormContainer>
  );
};

export default Summary;
