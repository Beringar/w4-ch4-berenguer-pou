import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import FormContext from "./components/contexts/FormContext";
import { useContext } from "react";

function App() {
  const { incrementStep, decrementStep } = useContext(FormContext);

  return (
    <>
      <div className="bg-light">
        <div className="container mt-3">
          <main>
            <div className="row g-5">
              <div className="col">
                <Form />
                <div className="d-flex justify-content-end">
                  <Button
                    className="btn m-2 btn-primary"
                    actionOnClick={decrementStep}
                    text="Previous Step"
                  />
                  <Button
                    className="btn m-2 btn-primary"
                    actionOnClick={incrementStep}
                    text="Next Step"
                  />
                </div>
              </div>
            </div>
          </main>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2022 ISDI Coders</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
