import "./css/TestContainer.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import ColumnLevel from "./styledComponents/columnLevel";
import { useState } from "react";

export default function TestContainer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 

  const textLevel = "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";
  const columnLevelData = [
    { level: "A1", text: textLevel },
    { level: "A2", text: textLevel },
    { level: "B1", text: textLevel },
    { level: "B2", text: textLevel },
    { level: "C1", text: textLevel },
    { level: "C2", text: textLevel },
  ];

  return (
    <div className="home-test-container">
      <div className="home-test-container-left">
        <div className="home-test-container-left-title">не знаєш який курс тобі потрібен?</div>
        <div className="home-test-container-left-p">
          Пройди наш{" "}
          <HighlightedTextWithDots colorText="#ffffff" colorBackground="#767676B2" colorDots="#484848" widthDots={5} widthBorder={2} rightSide={false}>
            безкоштовний тест на рівень
          </HighlightedTextWithDots>{" "}
          <HighlightedTextWithDots colorText="#ffffff" colorBackground="#767676B2" colorDots="#484848" widthDots={5} widthBorder={2} leftSide={false}>
            англійської мови
          </HighlightedTextWithDots>{" "}
          та дізнайся <br />
          який курс буде кращим рішенням для тебе
        </div>
        <button className="home-test-container-left-btn">пройти тест</button>
      </div>

      <div className="home-test-container-right">
        <div className="home-test-container-right-title">
          натискай на свій рівень та дивись корисну інформацію про нього
        </div>
        <div className="home-test-container-right-diagram-container">
          {columnLevelData.map((item, index) => (
            <ColumnLevel
              key={index}
              title={item.level}
              height={(index + 1) * 42 * (index + 1 === 1 ? 1.3 : 1)}
              active={activeIndex === index} 
              onClick={() => setActiveIndex(index === activeIndex ? null : index)} 
              index={index}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
