import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import "./css/Root.css";
import Footer from "../components/Footer";
export default function Root() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className={`root-container ${isHomePage ? "home-wrapper" : ""}`}>
            <Header isHomePage={isHomePage} />
            <div className="content-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
    
}
