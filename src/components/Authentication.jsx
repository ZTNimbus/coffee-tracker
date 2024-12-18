import { useState } from "react";

function Authentication() {
  const [isRegistering, SetIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleAuthenticate() {}

  return (
    <>
      <h2 className={"sign-up-text"}>
        {isRegistering ? "Sign up" : "Sign In"}
      </h2>
      <p>{isRegistering ? "Create your account" : "Sign in to your account"}</p>

      <input
        type="text"
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={"******"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleAuthenticate}>
        <p>Submit</p>
      </button>

      <hr />

      <div className={"register-content"}>
        <p>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>

        <button onClick={() => SetIsRegistering((r) => !r)}>
          {isRegistering ? "Login" : "Register"}
        </button>
      </div>
    </>
  );
}

export default Authentication;
