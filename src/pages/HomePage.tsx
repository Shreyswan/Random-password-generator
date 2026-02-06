import "./style.css";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="h1-heading-style">Random Strong Password Generator</h1>
      <h1 className="h1-heading-style">R.S.P.G.</h1>
      <p className="para-center-alignment color-shift">Making passwords fun</p>
      <p className="para-left-alignment">
        {" "}
        Choosing a password for a new account can be very tough and boring 🥱.
        We either put a similar password as one of our other accounts or we just
        go with the flow and make something different... which we end up
        forgetting within the next hour 😅. <br /> I've got a better alternative
        than to click 'forgot password'.{" "}
      </p>

      <hr></hr>
      <h3 className="para-left-alignment">
        INTRODUCING.... R.S.P.G.!!!! 🎉🎉🎉
      </h3>

      <p>
        This code is amazing for those moments when we are simply confused about
        our password. It's not just another simple password generator, its more
        complex, as in it has more meaning to it. <br /> Here are some{" "}
        <b>Salient features:</b>
      </p>

      <div className="card-group">
        <div className="card features-card border-info mb-3 text-bg-dark">
          <div className="card-header bg-secondary">
            <h5 className="h5-heading-style">
              Support for multiple types of passwords:
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Want a password with just words? you got that. Let's take it up a
              notch, password with numbers? alphanumeric? you got that too.
              password with special characters? Say no more. Everything from
              simple Laptop passwords to Email account passwords to even Phone
              pin number-style passwrods. Everything is possible.
            </p>
          </div>
        </div>
        <div className="card features-card border-info mb-3 text-bg-dark">
          <div className="card-header bg-secondary">
            <h5 className="h5-heading-style">
              A Different way of password generation:
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              No fancy schmancy LLMs for generating 100s of passwords and having
              us to choose, no silly "strong" passwords which make are just
              alpha numerals arranged in random order. This system randomly
              selects one book from Gutenberg corpus of nltk and then from that,
              it randomply selects words which are concatenated for forming the
              password.
            </p>
          </div>
        </div>
        <div className="card features-card border-info mb-3 text-bg-dark">
          <div className="card-header bg-secondary">
            <h5 className="h5-heading-style">
              Randomness through and through:
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              We've got random corpus, random words, random number of words,
              random numbers themselves (in case of "alphanum" and "pin"
              password mode), random special characters (in case of "mix"
              password mode).
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2>How to use??</h2>
      <p className="card-text">
        {" "}
        With a self explanatory UI using this app couldn't be any easier than
        pushing a few buttons. 👨‍💻
      </p>
      <ol>
        <li>
          Navigate to the <span className="color-shift">Password Bakery</span>{" "}
          by pressing the "Get baking" button.{" "}
        </li>
        <li>
          Next select the Type of password you like, if you select "pin", then
          you can adjust the slider as well to set the length of the pin
        </li>
        <li>
          Finally, press on the password window to copy it to clipboard and use
          it for any purpose!!
        </li>
      </ol>

      <p className="para-left-alignment">
        Excited to use??? 😆😆 I know you are, what are you waiting for?? Go
        generate those passwords!!
      </p>
    </div>
  );
};

export default HomePage;
