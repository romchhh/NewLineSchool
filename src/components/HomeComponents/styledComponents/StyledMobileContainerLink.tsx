import "./css/StyledMobileContainerLink.css";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import arrowRight from "../../../assets/elements/arrow_right.png";

export default function StyledMobileContainerLink({children, link}: {children: ReactNode; link: string}) {
    const navigate = useNavigate();
  return (
    <div className="styled-mobile-container-link">
      <div className="styled-mobile-container-link-text">
        {children}
      </div>
      <div className="styled-mobile-container-link-button" onClick={() => {
            navigate(link);
      }}>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
}
