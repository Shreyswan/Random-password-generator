import "./BottomBar.css";
const BottomBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark text-bg-dark navbar-accent-top empty-space">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img
                className="image-style"
                src="./src/assets/app_logo.svg"
              ></img>
            </li>
            <li>
              <p className="text-style">
                Project link :- <br></br>
                <a
                  href="https://github.com/Shreyswan/Random-password-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Random password generator
                </a>
              </p>
              <p className="text-style">
                <br></br>
                My Profile link :- <br></br>
                <a
                  href="https://github.com/Shreyswan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shreyswan GitHub
                </a>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
