import { useState } from "react";
import "./Form.css";
// import FormContext from "../contexts/FormContext";
// import { useContext } from "react";

const Form = () => {
  // const { step, incrementStep, decrementStep, showData } = useContext(FormContext);

  const initialFormData = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
    rememberPassword: "",
  };

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [event.target.id]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: call a function showData(formData) from context: step 4
  };

  return (
    <>
      <form>
        <div className="row g-3 mb-1">
          <h3>STEP 1</h3>
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
              <span className="input-group-text">You are XX years old</span>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                placeholder="enter your birthdate"
                onChange={handleChange}
              />
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
          <h3>STEP 2</h3>
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
          <h3>STEP 3</h3>
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
              <label className="form-check-label" htmlFor="rememberPassword">
                Remember password
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn m-2 btn-warning"
            onClick={handleSubmit}
          >
            ENTER
          </button>
        </div>
      </form>
      <hr className="my-4" />
      <h3>STEP 4 - DATA VIEW</h3>
      <div className="p-3 bg-dark">
        {Object.entries(formData).map(([label, value]) => (
          <p className="text-center text-warning m-0" key={label}>
            {label}: <span className="fw-bold fs-4">{value}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export default Form;
