import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const adminEmail = useSelector((state) => state.user.userInfo.email);

    if (adminEmail === "demo@gmail.com") {
        return children;
    }
    return (
        <div>
            <Link className="header-nav-link" to="/lifestyle">
                Suppport
            </Link>
        </div>
    );
};

export default AdminRoute;
