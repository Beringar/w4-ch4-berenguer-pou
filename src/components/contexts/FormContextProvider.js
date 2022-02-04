import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const initialFormData = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
    rememberPassword: "",
  };
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const incrementStep = () => setFormStep(formStep + 1);
  const decrementStep = () => setFormStep(formStep - 1);

  return (
    <FormContext.Provider
      value={{
        formStep,
        incrementStep,
        decrementStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
