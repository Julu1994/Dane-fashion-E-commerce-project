import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/home";
import Shop from "./Pages/ShopPage/shop";
import Support from "./Pages/SupportPage/support";
import Lifestyle from "./Pages/LifestylePage/lifestyle";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Login from "./Pages/LoginPage/login";
import Register from "./Pages/RegisterPage/register";
import { Reset } from "./Pages/PasswordReset/reset";
import Admin from "./Pages/AdminPage/admin";
import AdminRoute from "./Components/AdminComponents/adminRoute";
import SingleProduct from "./Pages/SingleProduct/singleProduct";
import { useSelector } from "react-redux";
import Cart from "./Pages/CartPage/cart";
import Checkout from "./Pages/CheckoutPage/checkout";
import CardPayment from "./Pages/Payment/cardPayment";

function App() {
    const showCart = useSelector((state) => state.cartToggle.cartShow);
    const a = process.env.REACT_APP_STRIPE_SECRET_KEY;
    console.log(a);
    return (
        <Router>
            <Header />
            {showCart && <Cart />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<CardPayment />} />

                <Route
                    path="/admin/*"
                    element={
                        <AdminRoute>
                            <Admin />
                        </AdminRoute>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
