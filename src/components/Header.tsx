import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import "./css/Header.css";

export default function Header({ isHomePage }: { isHomePage: boolean }) {
    const navigate = useNavigate();
    const headerLinks = [
        { name: "головна", path: "/" },
        { name: "для школярів", path: "/forSchoolchildren" },
        { name: "для дорослих", path: "/forAdults" },
        { name: "підготовка до cambridge exams", path: "/prepareForExams" },
        { name: "розмовні клуби", path: "/clubs" },
        { name: "контакти", path: "/contacts" }
    ];

    return (
        <div className={`header-container ${isHomePage ? "header-transparent" : ""}`}>
            <img
                src="src/assets/logo.png"
                alt=""
                className="header-logo"
                onClick={() => {
                    navigate("/");
                }}
            />
            <div className="header-links">
                {headerLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        style={({ isActive }) => ({
                            color: isActive ? "#AE88AD" : "#000000"
                        })}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div className="header-btn">ЗАПИСАТИСЯ</div>
        </div>
    );
}
