import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import {
  card,
  cardBtn,
  cardInnerContainer,
  cardPriceBtn,
  cardPrice
} from "../styles/cardStyles";

function Product({ prod }) {
  const { addToCart } = useContext(productsContext);
  return (
    <div style={card}>
      <h3>{prod.title}</h3>
      <div style={cardInnerContainer}>
        <img
          src={prod.image}
          alt={prod.title}
          style={{ width: "30%", aspectRatio: "auto" }}
        />
        <div style={cardPriceBtn}>
          <p style={cardPrice}>${prod.price}</p>
          <button style={cardBtn} onClick={() => addToCart(prod)}>
            Add to Cart
          </button>
        </div>
      </div>
      <p>{prod.description.slice(0, 40)}...</p>
    </div>
  );
}

export default Product;
