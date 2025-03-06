import "./css/StyledContainerLink.css";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import arrowRight from "../../../assets/elements/arrow_right.png";

export default function StyledContainerLink({children, link}: {children: ReactNode; link: string}) {
    const navigate = useNavigate();
  return (
    <div className="styled-container-link">
      <div className="styled-container-link-text">
        {children}
      </div>
      <div className="styled-container-link-button" onClick={() => {
            navigate(link);
      }}>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
}
