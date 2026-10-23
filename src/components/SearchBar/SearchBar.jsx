import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher un produit..."
        aria-label="Rechercher un produit"
      />
    </div>
  );
}