import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signout = (e) => {
    e.preventDefault();
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Travel Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CustomLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </CustomLink>
              </li>

              <>
                {user ? (
                  <>
                    <li className="nav-item">
                      <CustomLink
                        className="nav-link active"
                        aria-current="page"
                        to="/cart"
                      >
                        Cart
                      </CustomLink>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link" onClick={signout}>
                        Logout
                      </div>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <CustomLink className="nav-link" to="/login">
                      login
                    </CustomLink>
                  </li>
                )}
              </>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
