import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Welcome, please log in!</h1>
      <h4>(Or signup... it's your choice)</h4>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Let's get you started": "Are you sure you haven't been here before?"}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}