import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Mini-Me Equipment Service!</h1>
      <h4>Please Log In!</h4>
      <h6>(Or signup... it's your choice)</h6>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin
          ? "Let's get you started"
          : "Are you sure you haven't been here before?"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
