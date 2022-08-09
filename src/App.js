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

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
