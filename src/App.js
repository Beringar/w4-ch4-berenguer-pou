import "./App.css";

function App() {
  return (
    <>
      <div className="bg-light">
        <div className="container mt-3">
          <main>
            <div className="row g-5">
              <div className="col">
                <form>
                  <div className="row g-3 mb-1">
                    <h3>STEP 1</h3>
                    <div className="col-sm-6">
                      <label htmlFor="name" className="form-label">
                        {" "}
                        Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        value=""
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
                        value=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="birthdate" className="form-label">
                        Birthdate
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">
                          You are XX years old
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          id="birthdate"
                          placeholder="enter your birthdate"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="form-label">
                        {" "}
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="paquito@pacazon.com"
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
                      />

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberPassword"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberPassword"
                        >
                          Remember password
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-center">
                  <button className="btn m-2 btn-primary">Previous step</button>
                  <button className="btn m-2 btn-warning">Enter</button>
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
