import "./css/ForUsImportant.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import { useEffect, useState } from "react";
import Accordion from "./styledComponents/Accordion";
export default function ForUsImportant() {
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");
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
  const accordionContent = [
    {
      title: "Впевнено спілкуватись",
      content:"Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      title: "Сласти міжнародні іспити",
      content:"Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      title: "Досягти академічних успіхів",
      content:"Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
  ];
  let content;
  if (layoutForMainBanner === "desktop") {
    content = (
      <div className="home-for-us-important-text-container">
        <div className="home-for-us-important-text-title">
          A також ми допоможемо вам підняти рівень англійської, щоб наші
          студенти могли:
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            Впевнено спілкуватися
          </HighlightedTextWithDots>
          : вільно спілкуватися в повсякденному житті, подорожувати та будувати
          міжнародну кар’єру.
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#A0BFBD66"
            colorDots="#A0BFBD"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            Скласти міжнародні іспити
          </HighlightedTextWithDots>
          : успішно підготуватися до Cambridge Exams, НМТ та ЄВІ.
        </div>
        <div className="home-for-us-important-text">
          <HighlightedTextWithDots
            colorBackground="#FCE69699"
            colorDots="#FCE696"
            colorText="#414040"
            widthDots={5}
            widthBorder={1}
          >
            Досягти академічних успіхів
          </HighlightedTextWithDots>
          : легко розуміти навчальний матеріал та ефективно спілкуватися з
          викладачами
        </div>
      </div>
    );
  } else {
    content = (
      <div className="home-for-us-important-text-container-mobile">
        <div className="home-for-us-important-text-container-mobile-title">
          A також ми допоможемо{" "}
          <img
            src="./assets/elements/arrow_up_right.png"
            className="home-for-us-important-text-container-mobile-img"
            alt=""
          />
        </div>
        <div className="home-for-us-important-text-container-mobile-body">
          {
            accordionContent.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))
          }
        </div>
      </div>
    );
  }
  return (
    <div className="home-for-us-important-main-container">
      <div className="scroll-to-see-more">
          SCROLL TO SEE MORE
          <img src="./assets/elements/arrow_bottom.png" alt="" />
        </div>
      <div className="home-for-us-important-container">
        <div className="home-for-us-important-title-container">
          <div className="home-for-us-important-title">ДЛЯ НАС ВАЖЛИВО</div>
          <div className="home-for-us-important-title-subtitles-container">
            <div className="home-for-us-important-title-subtitle p1">
              надихати
            </div>
            <div className="home-for-us-important-title-subtitle p2">
              мотивувати
            </div>
            <div className="home-for-us-important-title-subtitle p3">
              спонукати до ефективного вивчення мови
            </div>
          </div>
        </div>
        <div className="home-for-us-important-content">
          <div className="home-for-us-important-img">
            <img src="./assets/images/forUsImportant.png" alt="" />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
