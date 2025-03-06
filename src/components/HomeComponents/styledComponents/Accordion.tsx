import { useState } from "react";
import "./css/Accordion.css";
export default function Accordion({ title, content }: { title: string; content: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion" onClick={() => setIsOpen(!isOpen)}>
            <div className="accordion-header">
                <span>{title}</span>
                {/* {isOpen ? img : "down"} */}
                <img src="./assets/elements/accordionBtn.png" className={`accordion-btn ${isOpen ? "open" : ""}`} alt="" />
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
}
