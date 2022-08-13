import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  return (
    <section className="background-custom-image">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <h3 className="text-center text-primary mt-3">
                Travel Book Login
              </h3>
              <div className="card-body p-4 p-sm-5">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Email"
                    />
                    <label for="floatingPassword">Enter Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Password"
                    />
                    <label for="floatingPassword">Enter Password</label>
                  </div>

                  <br />
                </form>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <p className="mt-2">Have you forget your password?</p>
                  <button className="btn btn-danger">Forget Password?</button>
                </div>
                <hr className="my-4" />
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
