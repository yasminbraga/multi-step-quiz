import { QuizContext } from "@/contexts/QuizContext";
import React, { useContext } from "react";
import Field from "../components/field";
import FormContainer from "../components/formContainer";

const Info: React.FC = () => {
  const { data } = useContext(QuizContext);

  return (
    <FormContainer
      title="Personal info"
      text="Please provide your name, email, address and phone number"
    >
      <Field name="name" placeholder="e.g. Stephen King" value={data.name} />
      <Field
        name="email address"
        placeholder="e.g. stephenking@lorem.com"
        value={data.email}
      />
      <Field
        name="phone number"
        placeholder="e.g. +1 234 567 890"
        value={data.phone}
      />
    </FormContainer>
  );
};

export default Info;
