import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ProductsContextProvider } from "./context/ProductsContext";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(null);
  const handleUser = (user) => setUser(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="logout-container">
            <Logout handleUser={handleUser} />
          </div>
          <BrowserRouter>
            <ProductsContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </ProductsContextProvider>
          </BrowserRouter>
        </>
      ) : (
        <>
          <div className="login">
            <div className="login-container">
              <Login handleUser={handleUser} />
            </div>
            <p>Or...</p>
            <div className="register-container">
              <Register />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
