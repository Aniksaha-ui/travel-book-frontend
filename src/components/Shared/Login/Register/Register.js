import React, { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  return (
    <section className="background-custom-image">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <h3 className="text-center text-primary mt-3">
                Travel Book Register
              </h3>
              <div className="card-body p-4 p-sm-5">
                <form onSubmit={handleRegister}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingUserName"
                      placeholder="Enter User Name"
                      ref={userNameRef}
                    />
                    <label for="floatingUserName">Enter User Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={emailRef}
                      type="text"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="Enter Email Address"
                    />
                    <label for="floatingEmail">Enter Email Address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      ref={passwordRef}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Your Password"
                    />
                    <label for="floatingPassword">Enter Your Password</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Register
                    </button>
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

export default Register;
