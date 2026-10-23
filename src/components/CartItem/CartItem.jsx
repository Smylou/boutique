import { useCart } from "../../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-item__info">
        <h2>{item.title}</h2>
        <p>{item.price.toFixed(2)} €</p>
      </div>

      <div className="cart-item__quantity">
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          aria-label="Diminuer la quantité"
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Augmenter la quantité"
        >
          +
        </button>
      </div>

      <p className="cart-item__subtotal">
        {(item.price * item.quantity).toFixed(2)} €
      </p>

      <button type="button" onClick={() => removeFromCart(item.id)}>
        Supprimer
      </button>
    </li>
  );
}