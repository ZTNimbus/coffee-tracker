/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Authentication({ handleCloseModal }) {
  const [isRegistering, SetIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState(null);

  const { signup, login } = useAuth();

  async function handleAuthenticate() {
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 8 ||
      isAuthenticating
    )
      return;
    try {
      setIsAuthenticating(true);
      setError(null);

      if (isRegistering) {
        await signup(email, password);
      } else {
        await login(email, password);
      }

      handleCloseModal();
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      <h2 className={"sign-up-text"}>
        {isRegistering ? "Sign up" : "Sign In"}
      </h2>
      <p>{isRegistering ? "Create your account" : "Sign in to your account"}</p>
      {error && <p>❌ Invalid Credentials</p>}

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
        <p>{isAuthenticating ? "Authenticating..." : "Submit"}</p>
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
