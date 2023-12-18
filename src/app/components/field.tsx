import { QuizContext } from "@/contexts/QuizContext";
import { FormEvent, InputHTMLAttributes, useContext } from "react";

interface FieldType extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  value: string;
}

const Field: React.FC<FieldType> = ({ name, placeholder, value }) => {
  const { data, setData } = useContext(QuizContext);

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setData({ ...data, [name]: target.value });
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className="text-marine-blue text-sm capitalize mb-2"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        className="border border-light-gray rounded-lg p-3 text-marine-blue font-medium outline-none focus:border-purplish-blue"
        onChange={handleSetValue}
        value={value}
      />
    </div>
  );
};

export default Field;
