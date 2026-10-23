const API_URL = "https://fakestoreapi.com";

async function request(path) {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des données");
  }
  return response.json();
}

export const getProducts = () => request("/products");

export const getCategories = () => request("/products/categories");

// sort=desc : les identifiants les plus élevés d'abord, donc les plus récents
export const getLatestProductsByCategory = (category, limit = 5) =>
  request(
    `/products/category/${encodeURIComponent(category)}?limit=${limit}&sort=desc`
  );