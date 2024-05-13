import { useContext } from "react";
import Product from "../components/Product";
import "./Products.css";

import { productsContext } from "../context/ProductsContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sort from "../components/Sort";
import FilterByPrice from "../components/FilterByPrice";
import Search from "../components/Search";
import CartSummary from "../components/CartSummary";

function Products() {
  const { products, maxPrice, query } = useContext(productsContext);

  return (
    <>
      <Header>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 2em",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "1em",
            }}
          >
            <Search />
            <Sort />
            <FilterByPrice />
            <CartSummary />
          </div>
        </div>
      </Header>
      <main className="container">
        {products
          .filter(
            (prod) =>
              prod.price <= maxPrice &&
              prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          )
          .map((prod) => (
            <Product prod={prod} key={prod.id} />
          ))}
      </main>
    </>
  );
}

export default Products;
