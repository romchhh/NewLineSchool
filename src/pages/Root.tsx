import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import "./css/Root.css";
import Footer from "../components/Footer";
export default function Root() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isForAdultsPage = location.pathname === "/forAdults";
    return (
        <div className={`root-container ${isHomePage ? "home-wrapper" : ""}`}>
            <Header isHomePage={isHomePage} />
            <div className="content-container">
                <Outlet />
            </div>
            {isForAdultsPage ? <></> : <Footer background={true}/>}
        </div>
    );
    
}
