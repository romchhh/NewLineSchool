import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import "./css/Root.css";
export default function Root() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className={isHomePage ? "home-wrapper" : ""}>
            <Header isHomePage={isHomePage} />
            <Outlet />
        </div>
    );
}
