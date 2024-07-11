import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Error404 from "./pages/Error404";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<ProtectedRoute component={Cart}/>} />
        <Route path="/wishlist" element={<ProtectedRoute component={Wishlist} />} />
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
