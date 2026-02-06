import { useState } from "react";

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
              className="p-5 change-pointer user-select-none "
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
    </div>
  );
};

export default PasswordBakery;
