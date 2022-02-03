import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div className="bg-light">
        <div className="container mt-3">
          <main>
            <div className="row g-5">
              <div className="col">
                <Form />
                <div className="d-flex justify-content-center">
                  <button className="btn m-2 btn-primary">Previous step</button>
                  <button className="btn m-2 btn-primary">Next step</button>
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
