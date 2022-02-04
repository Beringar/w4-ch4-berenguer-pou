import "./Form.css";
import FormContext from "../contexts/FormContext";
import { useContext } from "react";
import Button from "../Button/Button";

const Form = () => {
  const {
    formStep,
    incrementStep,
    decrementStep,
    formData,
    setFormData,
    checkForm,
    validated,
    errorData,
  } = useContext(FormContext);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    checkForm(formStep);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    incrementStep();
  };

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <div className="row g-3 mb-1 mt-2">
        <form>
          <h1>React Form W4 CH4</h1>
          {formStep === 1 && (
            <>
              <div className="row g-4">
                <h3>1. Personal data</h3>
                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="birthdate" className="form-label">
                    Birthdate
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="date"
                      className="form-control"
                      id="birthdate"
                      placeholder="enter your birthdate"
                      min="1900-01-01"
                      max="2022-02-03"
                      onChange={handleChange}
                    />
                    {formData.birthdate && (
                      <span className="input-group-text fw-bold">
                        You are {getAge(formData.birthdate)} years old
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="paquito@pacazon.com"
                    onChange={handleChange}
                  />
                </div>
                <hr className="my-4" />
              </div>
            </>
          )}
          {formStep === 2 && (
            <>
              <div className="row g-4">
                <h3>2. User data</h3>
                <div className="col-md-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="repeatPassword" className="form-label">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <hr className="my-4" />
              </div>
            </>
          )}
          {formStep === 3 && (
            <>
              <div className="row g-4">
                <h3>3. Login</h3>
                <div className="col-md-6">
                  <label htmlFor="usernameLogin" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameLogin"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="passwordLogin" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordLogin"
                    placeholder=""
                    onChange={handleChange}
                  />

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberPassword"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPassword"
                    >
                      Remember password
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    text="ENTER"
                    className="btn m-2 btn-warning btn-lg"
                    actionOnClick={handleSubmit}
                  />
                </div>
                <hr className="my-4" />
              </div>
            </>
          )}
        </form>
        {formStep === 4 && (
          <>
            <div className="row g-4">
              <h3>STEP 4 - DATA VIEW</h3>
              <div className="p-3 bg-dark">
                {Object.entries(formData).map(([label, value]) => (
                  <p className="text-center text-warning m-0" key={label}>
                    {label}: <span className="fw-bold fs-4">{value}</span>
                  </p>
                ))}
              </div>
              <hr className="my-4" />
            </div>
          </>
        )}
      </div>
      {formStep < 3 && (
        <div className="d-flex justify-content-end">
          {formStep > 1 && (
            <Button
              className="btn m-2 btn-primary"
              actionOnClick={decrementStep}
              text="Previous Step"
            />
          )}
          <Button
            className={`btn m-2 btn-primary${validated ? "" : " btn-disabled"}`}
            actionOnClick={incrementStep}
            text="Next Step"
          />
        </div>
      )}
      {Object.keys(errorData).length > 0 && (
        <>
          <h5>Missing data!</h5>
        </>
      )}
    </>
  );
};

export default Form;
