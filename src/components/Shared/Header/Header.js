import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
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

              <li className="nav-item">
                <CustomLink className="nav-link" to="/blogs">
                  Blogs
                </CustomLink>
              </li>

              <>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/manage">
                    Manage Inventory
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/myItem">
                    My Item
                  </CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/addproduct">
                    Add New
                  </CustomLink>
                </li>
              </>

              <>
                <li className="nav-item">
                  <CustomLink className="nav-link" to="/login">
                    login
                  </CustomLink>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
