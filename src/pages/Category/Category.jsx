import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getLatestProductsByCategory } from "../../api/fakeStoreApi";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");

    getLatestProductsByCategory(name, 5)
      .then((data) => {
        if (!ignore) setProducts(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [name]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main>
      <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
      {products.length === 0 ? (
        <p>Aucun produit dans cette catégorie.</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
}