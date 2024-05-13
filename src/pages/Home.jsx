import { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { productsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  const { products } = useContext(productsContext);

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main className="home">
      <h2>Our products...</h2>
        <div>
          {products.slice(0,4).map((prod) => (
              <p key={prod.id}>{prod.title}</p>
            ))}
        </div>
        <div>
          <Link to={"/products"}>Ver más...</Link>
        </div>
      </main>
    </>
  );
}

export default Home;
