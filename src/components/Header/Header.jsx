import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getCategories } from "../../api/fakeStoreApi";
import { useCart } from "../../context/CartContext";
import "./Header.css";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const { totalItems } = useCart();

  useEffect(() => {
    let ignore = false;

    getCategories()
      .then((data) => {
        if (!ignore) setCategories(data);
      })
      .catch(() => {
        // si le chargement échoue, le header s'affiche simplement sans catégories
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        {categories.map((category) => (
          <Link key={category} to={`/category/${encodeURIComponent(category)}`}>
            {category}
          </Link>
        ))}
        <Link
          to="/cart"
          className="header__cart"
          aria-label={`Panier, ${totalItems} produit(s)`}
        >
          🛒
          {totalItems > 0 && (
            <span className="header__badge">{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}