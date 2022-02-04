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
  const [errorData, setErrorData] = useState({});

  const incrementStep = () => {
    setFormStep(formStep + 1);
    setErrorData([]);
  };
  const decrementStep = () => {
    setFormStep(formStep - 1);
    setErrorData([]);
  };

  const testEmail = (emailAdress) => {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const addError = (label, errorMsg) => {
    setErrorData({ ...errorData, [label]: errorMsg });
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
        if (!name) addError("Name", "empty!");
        if (!lastName) addError("Last name", "empty!");
        if (!birthdate) addError("Birthdate", "not selected!");
        break;
      case 2:
        setValidated(
          username && password && repeatPassword && password === repeatPassword
        );
        if (!username) addError("Username", "empty!");
        if (!password) addError("Password", "empty");
        if (!testEmail) addError("Email", "Email is not valid!");
        break;
      case 3:
        setValidated(usernameLogin === username && passwordLogin === password);
        if (usernameLogin !== username)
          addError(
            "Login username",
            "Username does not match data entered in Step 2!"
          );
        if (passwordLogin !== password)
          addError("Login Password", "does not match data entered in Step 2!");
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
        errorData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
