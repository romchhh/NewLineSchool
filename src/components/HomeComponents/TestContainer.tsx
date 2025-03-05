import "./css/TestContainer.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import HighlightedText from "./styledComponents/HighlightedText";
import ColumnLevel from "./styledComponents/ColumnLevel";
import { useNavigate } from "react-router";
import { useState, JSX, useEffect} from "react";

export default function TestContainer({
  backImg,
  footer,
  backIsImg = true,
}: {
  backImg: string;
  footer?: JSX.Element;
  backIsImg?: boolean;
}) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");
  const textLevel =
    "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";
  const columnLevelData = [
    { level: "A1", text: textLevel },
    { level: "A2", text: textLevel },
    { level: "B1", text: textLevel },
    { level: "B2", text: textLevel },
    { level: "C1", text: textLevel },
    { level: "C2", text: textLevel },
  ];

   useEffect(() => {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setLayoutForMainBanner("mobile");
        } else {
          setLayoutForMainBanner("desktop");
        }
      };
  
      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    }, [window.innerWidth]);

    let textP;
  if (layoutForMainBanner === "desktop") {
    textP = (
      <div className="home-test-container-left-p">
            Пройди наш{" "}
            <HighlightedTextWithDots
              colorText="#ffffff"
              colorBackground="#767676B2"
              colorDots="#484848"
              widthDots={5}
              widthBorder={2}
              rightSide={false}
            >
              безкоштовний тест на рівень
            </HighlightedTextWithDots>{" "}
            <HighlightedTextWithDots
              colorText="#ffffff"
              colorBackground="#767676B2"
              colorDots="#484848"
              widthDots={5}
              widthBorder={2}
              leftSide={false}
            >
              англійської мови
            </HighlightedTextWithDots>{" "}
            та дізнайся <br />
            який курс буде кращим рішенням для тебе
          </div>
    )
  } else{
    textP = (
      <div className="home-test-container-left-p">
            Пройди наш{" "}
            <HighlightedText
              colorBack="#AE88AD"
            >
              безкоштовний тест на
            </HighlightedText>{" "}
            <HighlightedText
              colorBack="#AE88AD"
            >
              рівень англійської мови
            </HighlightedText>{" "}
            та дізнайся 
            який курс буде кращим рішенням для тебе
          </div>
    )
  }

  const buttonWithfunc = <button className="home-test-container-left-btn" onClick={()=>{
    navigate("/tests")
  }}>пройти тест</button>

  return (
    <div
      className="home-test-container-with-footer"
      style={{ backgroundImage: footer ? `url(${backImg})` : "none" }}
    >
      <div
        className="home-test-container"
        style={{
          backgroundImage: backIsImg === false ? "none" : (layoutForMainBanner === "desktop" ? `url(${backImg})`: `url('src/assets/background/backForTestMobile.png')`),
        }}
      >
        <div className="home-test-container-left">
          <div className="home-test-container-left-title">
            не знаєш який курс тобі потрібен?
          </div>
          {textP}
          {layoutForMainBanner ==="desktop" ? buttonWithfunc : null}
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
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
                index={index}
                text={item.text}
              />
            ))}
          </div>
        </div>
        {layoutForMainBanner ==="mobile" ? buttonWithfunc : null}
      </div>
      {footer ? <div style={{ marginTop: 40 }}>{footer}</div> : null}
    </div>
  );
}
