import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark text-bg-dark navbar-accent sticky-top">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h1
                className="navbar-brand change-pointer"
                onClick={() => navigate("/")}
              >
                Random Strong Password Generator
              </h1>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/bakery")}>
                Get Baking!
              </button>
            </li>
          </ul>
          <button
            className="navbar-toggler d-lg-block"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasRight" // this doesn't seem like an impotant prop, but we have it.
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        data-bs-scroll="true"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
      >
        <div className="offcanvas-header">
          <img
            src="./src/assets/app_logo.svg"
            alt="Really cool logo here"
          ></img>
          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
