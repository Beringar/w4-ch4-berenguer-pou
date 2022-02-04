import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import FormContext from "./components/contexts/FormContext";
import { useContext } from "react";

function App() {
  const { formStep, incrementStep, decrementStep, checkForm } =
    useContext(FormContext);

  return (
    <>
      <div className="bg-light">
        <div className="container mt-3">
          <main>
            <div className="row g-5">
              <div className="col">
                <Form />
              </div>
            </div>
          </main>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="pb-4">&copy; 2022 ISDI Coders</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
