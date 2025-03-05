import "./css/StyledMobileContainerLink.css";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
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
        <img src="/assets/elements/arrow_right.png" alt="" />
      </div>
    </div>
  );
}
