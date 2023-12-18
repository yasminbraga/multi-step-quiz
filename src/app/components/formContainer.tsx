import React, { ReactNode } from "react";

interface FormContainerTypes {
  text: string;
  title: string;
  children: ReactNode;
}

const FormContainer: React.FC<FormContainerTypes> = ({
  children,
  text,
  title,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mx-6 md:mx-16 md:mb-16 md:shadow-none">
      <h2 className="text-3xl font-bold text-marine-blue mb-3">{title}</h2>
      <p className="text-cool-gray text-sm mb-5">{text}</p>
      {children}
    </div>
  );
};

export default FormContainer;
