import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useState } from "react";

function Register() {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        console.error(errorCode);
        setError(errorCode);
      });
  };
  return (
    <>
      <h2>Register</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input type="text" placeholder="xxx@xxx.com" name="email" />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="Enter the password"
            name="password"
          />
        </label>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
