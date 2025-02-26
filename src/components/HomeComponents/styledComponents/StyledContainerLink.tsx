import "./css/StyledContainerLink.css";
import { useNavigate } from "react-router";
import { ReactNode } from "react";
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
        <img src="src/assets/elements/arrow_right.png" alt="" />
      </div>
    </div>
  );
}
