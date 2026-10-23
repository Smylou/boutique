import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="product-card__category">{product.category}</p>
      <p className="product-card__price">{product.price.toFixed(2)} €</p>
      <button type="button" onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </article>
  );
}