import { useState, useEffect } from "react";
import { getProducts } from "../../api/fakeStoreApi";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let ignore = false;

    getProducts()
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
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const query = search.trim().toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  return (
    <main>
      <h1>Tous les produits</h1>
      <SearchBar value={search} onChange={setSearch} />

      {filteredProducts.length === 0 ? (
        <p>Aucun produit ne correspond à « {search} ».</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </main>
  );
}