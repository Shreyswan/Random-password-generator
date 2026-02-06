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

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg text-bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
