import { AddsType, QuizContext } from "@/contexts/QuizContext";
import React, { FormEvent, useContext } from "react";
import CheckboxInput from "../components/checkboxInput";
import FormContainer from "../components/formContainer";

const Adds: React.FC = () => {
  const { data, setData } = useContext(QuizContext);

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    const value = JSON.parse(target.value);

    const dataAdd = data.adds.find((add) => add.name === value.name);
    const updateAdd = {
      name: value.name,
      checked: !dataAdd?.checked,
      price: value.price,
    };

    const dataAdds: AddsType[] = data.adds.map((add) =>
      add.name === updateAdd.name ? updateAdd : add
    );

    setData({
      ...data,
      adds: dataAdds,
    });
  };

  return (
    <FormContainer
      title="Pick add-ons"
      text="Add-ons help enhance your gaming experience."
    >
      <div className="flex flex-col gap-3">
        <CheckboxInput
          title="Online service"
          text="Access to multiplayer games"
          addPrice={data.isPlanPeriodYear ? 10 : 1}
          name="online service"
          value={JSON.stringify({
            name: "online service",
            checked: data.adds[0].checked,
            price: data.isPlanPeriodYear ? 10 : 1,
          })}
          onChange={(e) => handleSetValue(e)}
        />
        <CheckboxInput
          title="Larger storage"
          text="Extra 1TB of cloud save"
          addPrice={data.isPlanPeriodYear ? 20 : 2}
          name="largerStorage"
          value={JSON.stringify({
            name: "larger storage",
            checked: data.adds[1].checked,
            price: data.isPlanPeriodYear ? 20 : 2,
          })}
          onChange={(e) => handleSetValue(e)}
        />
        <CheckboxInput
          title="Customizable profile"
          text="Custom theme on your profile"
          addPrice={data.isPlanPeriodYear ? 20 : 2}
          name="customizableProfile"
          value={JSON.stringify({
            name: "customizable profile",
            checked: data.adds[2].checked,
            price: data.isPlanPeriodYear ? 20 : 2,
          })}
          onChange={(e) => handleSetValue(e)}
        />
      </div>
    </FormContainer>
  );
};

export default Adds;
