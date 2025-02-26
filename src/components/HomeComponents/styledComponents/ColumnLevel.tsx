import "./css/columnLevel.css";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  height: number;
  active: boolean;
  onClick: () => void;
  index: number;
  text: string;
}

export default function ColumnLevel({
  title,
  height,
  active,
  onClick,
  index,
  text,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (active && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClick(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active, onClick]);

  return (
    <div
      ref={containerRef}
      className={`column-level-container ${active ? "active" : ""}`}
      style={{ height }}
      onClick={onClick}
    >
      {index !== 5 && (
        <div className="column-level-arrow" style={{ top: index === 0 ? -50 : -60 }}>
          <img src="src/assets/elements/arrow_up_down.png" alt="Arrow" />
        </div>
      )}
      <div className="column-level-container-title">{title}</div>
      {active && (
        <div className="column-level-container-active-box">
          <img src="src/assets/elements/activeBoxLevel.png" alt="Active Box" className="active-box-bg" />
          <div className="active-box-text">{text}</div>
        </div>
      )}
    </div>
  );
}
