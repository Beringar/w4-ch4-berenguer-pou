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
  const [validated, setValidated] = useState(false);

  const incrementStep = () => setFormStep(formStep + 1);
  const decrementStep = () => setFormStep(formStep - 1);

  const testEmail = (emailAdress) => {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const checkForm = (step) => {
    const {
      name,
      lastName,
      birthdate,
      email,
      username,
      password,
      repeatPassword,
      usernameLogin,
      passwordLogin,
    } = formData;
    switch (step) {
      case 1:
        setValidated(
          name !== "" && lastName !== "" && birthdate !== "" && testEmail(email)
        );
        break;
      case 2:
        setValidated(
          username && password && repeatPassword && password === repeatPassword
        );
        break;
      case 3:
        setValidated(usernameLogin === username && passwordLogin === password);
        break;
      default:
        break;
    }
    return validated;
  };

  return (
    <FormContext.Provider
      value={{
        formStep,
        incrementStep,
        decrementStep,
        formData,
        setFormData,
        checkForm,
        validated,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
