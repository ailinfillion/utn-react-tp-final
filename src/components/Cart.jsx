import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { getDerivedCart } from "../utils/getDerivedCart";
import { cartStyle, itemStyle, deleteIconStyle } from "../styles/cartStyle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";
import Header from "./Header";
import Navbar from "./Navbar";

function Cart() {
  const { cart, removeFromCart } = useContext(productsContext);
  const derivedCart = getDerivedCart(cart);
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <article style={cartStyle}>
      <h2>Your Cart...</h2><br />
        {derivedCart.map((item) => (
          <>
            <div style={itemStyle} key={item.id}>
              <p>{item.name}</p>
              <p>
                Qtty: {item.quantity} - Total: ${item.totalPrice}
                <RiDeleteBin6Fill style={deleteIconStyle} onClick={() => removeFromCart(item.id)} />
              </p>
            </div>
          </>
        ))}
        <h3>Total: ${getTotalCartPrice(cart)}</h3>
      </article>
    </>
  );
}

export default Cart;
