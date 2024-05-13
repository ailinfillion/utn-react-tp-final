//check name summary is ok in this context?
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function CartSummary() {
  const { cart } = useContext(productsContext);
  return cart?.length ? (
    <>
      <Link to="/cart">
        <MdShoppingCart size={30} color="black" />{" "}
      </Link>
      <span>{cart.length}</span>
    </>
  ) : (
    <p>empty cart</p>
  );
}

export default CartSummary;
