import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login({ handleUser }) {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        handleUser(userCredential.user.email);
        setError(null);
      })
      .catch((err) => {
        const errorCode = err.code;
        console.error(errorCode);
        setError("Invalid email or password");
      });
  };
  return (
    <>
      <h2>Login</h2><br />
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input type="text" placeholder="xxx@xxx.com" name="email" />
        </label>
        <label>
          Password: <input
            type="password"
            placeholder="Enter the password"
            name="password"
          />
        </label>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
