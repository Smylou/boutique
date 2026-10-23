import { Link } from "react-router";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

export default function Cart() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main>
        <h1>Panier</h1>
        <p>Votre panier est vide.</p>
        <Link to="/">Continuer mes achats</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Panier</h1>
      <ul className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">Total : {totalPrice.toFixed(2)} €</p>
    </main>
  );
}