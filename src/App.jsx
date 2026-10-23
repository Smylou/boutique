import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}