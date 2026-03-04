import { ChangeEvent, useState } from "react";
import "./style.css";
import CheckStrength from "./PasswordStrengthChecker";

type DigitPickerProps = {
  length: number;
  setLength: (value: number) => void;
};

function DigitPicker({ length, setLength }: DigitPickerProps) {
  return (
    <div className="w-50">
      <label className="form-label">
        Pin length: <strong>{length}</strong>
      </label>

      <input
        type="range"
        className="slider-element"
        min={3}
        max={20}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
    </div>
  );
}

const STRENGTH_CONFIG: Record<
  number,
  { label: string; color: string; dotCount: number }
> = {
  0: { label: "INSTANT_CRACK", color: "#666666", dotCount: 1 },
  1: { label: "MIN_EFFORT", color: "#FF003C", dotCount: 3 },
  2: { label: "COMPUTING...", color: "#FCEE0C", dotCount: 6 },
  3: { label: "DECADE_THREAT", color: "#03D8F3", dotCount: 9 },
  4: { label: "GOD_MODE", color: "#00FFAA", dotCount: 12 },
};

function useCopyPassword() {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (password: string) => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };
  return { isCopied, copyToClipboard };
}

const PasswordBakery = () => {
  const [password, setPassword] = useState("");
  const [pass_type, setType] = useState<string>("alpha");
  const [length, setLength] = useState<number>(6);
  const { isCopied, copyToClipboard } = useCopyPassword();
  const [inputPassword, setInputPassword] = useState("");
  const [passScore, setScore] = useState(0);

  const isInputEmpty = inputPassword.length === 0;
  const currentConfig = !isInputEmpty
    ? STRENGTH_CONFIG[passScore]
    : { label: "IDLE", color: "#333", dotCount: 0 };

  const handleCheckStrength = () => {
    if (inputPassword.length === 0) {
      setScore(0);
      return;
    }
    const score = CheckStrength(inputPassword);
    setScore(score);
  };
  const generatePassword = async () => {
    const res = await fetch("http://localhost:8000/generate-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass_type: pass_type,
        length: length,
      }),
    });
    const data = await res.json();
    setPassword(data);
    console.log("FULL BACKEND RESPONSE", data);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputPassword(val);

    if (val.length > 0) {
      const score = CheckStrength(val);
      setScore(score);
    } else {
      setScore(0);
    }
  };

  return (
    <div>
      <h1 className="h1-heading-style">Password Bakery</h1>

      <hr></hr>
      <div className="container">
        <p className="para-center-alignment">
          Welcome to the RSPG Bakery, your very own{" "}
          <span className="color-shift">password bakery </span>!!
        </p>

        <p className="para-center-alignment">
          Time to bake some passwords!! Select you password type from the cards
          below. Next press the{" "}
          <span className="para-left-alignment-green"> Bake</span> button to get
          baking 🧑‍🍳!!
        </p>

        <div className="d-flex gap-4">
          <div className="card features-card border-info text-bg-dark flex-fill">
            <div className="card-header">Select type:</div>
            <div className="card-body">
              <div className="dropdown">
                <button
                  className="dropdown-toggle btn btn-outline-info w-100"
                  data-bs-toggle="dropdown"
                >
                  Type
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setType("alpha");
                      }}
                    >
                      Alphabet
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setType("alphanum");
                      }}
                    >
                      AlphaNumeric
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setType("mix");
                      }}
                    >
                      Mix of everything
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setType("pin");
                      }}
                    >
                      Pin
                    </a>
                  </li>
                </ul>
              </div>
              <hr></hr>
              <DigitPicker length={length} setLength={setLength}></DigitPicker>
              <hr className="hr-accent"></hr>

              <div className="button-center">
                <button
                  className="btn btn-outline-success w-25"
                  onClick={generatePassword}
                >
                  Bake
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className="modal fade success-modal-backdrop"
              id="SuccessModal"
            >
              <div className="modal-dialog">
                {/* <div className="modal-content"> */}
                <div className="modal-body success-modal-text">
                  Password copied Successfully
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="card features-card border-info text-bg-dark flex-fill">
            <div className="card-header">Your password:</div>
            <div
              className="p-5 change-pointer user-select-none"
              onClick={() => {
                copyToClipboard(password);
              }}
              data-bs-toggle="modal"
              data-bs-target="#SuccessModal"
            >
              <div className="card-body alert alert-dark-glow d-f lex align-items-center">
                <p className="para-center-alignment">{password} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr></hr>
        <h4 className="h4-heading-style">Password strength importance</h4>
        <p className="para-left-alignment">
          Passwords are the key to keeping sensitive data behind a firewall.
          With hackers everywhere it is very crucial to keep this sensitive data
          protected at all times. An interesting way to rate your passwords is
          the zxcvbn password strength checker. It rates the password on a
          measure of entropy. This means the password's strength depends on how
          less frequently the pattern in the password is followed. This means
          that the strength of a password is not dependent on use of numbers or
          special characters etc.
          <br></br> Below is the same zxcvbn password strength checker. If you
          wish, you can compare the strength of your current password, and a
          generated password to see the difference in the strength of RSPG.
          <br></br>
          <br></br> Note: The zxcvbn is not recommended on pin type of passwords
          as there often exists a constraint of pin size, like for phone
          passwords, usually 4-6 is the standard size of pins. zxcvbn doesn't
          account for this constraints and ranks these lengths of pins with a
          lower score.
        </p>
        <div className="card features-card border-info text-bg-dark w-50">
          <div className="card-header">Enter a password:</div>
          <div className="p-5">
            <input
              className="card-body alert alert-dark-glow d-f lex align-items-center w-100"
              value={inputPassword}
              onChange={handleInput}
            ></input>
          </div>
          <div
            className="cyber-meter-wrapper"
            style={{ "--active-color": currentConfig.color } as any}
          >
            <div className="dot-matrix">
              {/* Always renders exactly 12 dots, no more, no less */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index < currentConfig.dotCount ? "active" : ""}`}
                ></div>
              ))}
            </div>

            <div className="status-panel d-flex justify-content-between">
              <span className="scan-line" style={{ color: "#807f7f" }}>
                SCAN_RESULT:
              </span>
              <span
                className="time-label"
                style={{
                  color: currentConfig.color,
                  textShadow: `0 0 5px ${currentConfig.color}`,
                }}
              >
                {currentConfig.label}
              </span>
            </div>
          </div>

          <div className="button-center mt-3">
            <p style={{ fontSize: "10px", color: "#807f7f" }}>
              RE-SCAN SYSTEM ACTIVE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordBakery;
