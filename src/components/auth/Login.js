import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "../auth/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
        localStorage.setItem("loggedIn", true)
      navigate("/");
      toast.success("login successfully");
    } else {
      toast.error("Invalid credential");
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://assets.vogue.in/photos/61a70f88ac8355746bf2c660/2:3/w_1600,c_limit/AnnieLord002.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3 text-center"
                      style={{ letterSpacing: 1 }}
                    >
                      Login into your account
                    </h5>
                    <form onSubmit={submitHandler}>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="pt-1 mb-4 ">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg btn-primary"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?
                      <Link to={"/register"} style={{ color: "#393f81" }}>
                        Register here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
