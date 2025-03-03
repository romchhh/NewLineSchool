import "./css/AdultsBanner.css";
import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
// import { useEffect, useState } from "react";
export default function AdultsBanner() {
  //   const [layoutForAdultBanner, setLayoutForAdultBanner] = useState("desktop");
  // useEffect(() => {
  //     const updateLayout = () => {
  //       if (window.innerWidth < 768) {
  //         setLayoutForAdultBanner("mobile");
  //       } else {
  //         setLayoutForAdultBanner("desktop");
  //       }
  //     };
  
  //     window.addEventListener("resize", updateLayout);
  //     return () => window.removeEventListener("resize", updateLayout);
  //   }, [window.innerWidth]);
  const isMobile = window.innerWidth < 768; 
  return (
    <div className="for-adults-banner-container">
      <div className="for-adults-banner-title-container">
        <div className="for-adults-banner-title">
          Англійська для дорослих (Adults 18+)
        </div>
        <div className="for-adults-banner-title-underline">
          General English A0-B2. Вивчення рівня {isMobile ? <></>:<br />} + Підготовка до ЄВІ
        </div>
      </div>
      <div className="for-adults-banner-text">
        <div className="for-adults-banner-text-title">
          Підвищити свій рівень <br />
          англійської мови{" "}
          <HighlightedTextWithDots
            colorText="#ffffff"
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            widthDots={5}
            widthBorder={2}
          >
            - це гарна ідея!
          </HighlightedTextWithDots>
        </div>
        <div className="for-adults-banner-text-description">
          Ми пропонуємо навчатись у сфері живої мови, адже наша программа
          базується на комунікативній методиці Cambridge English і спирається на
          міжнародну шкалу СEFR ( Common European Framework of Reference
        </div>
      </div>
      <div className="for-adults-banner-img">
        <img src="src/assets/images/forAdults.png" alt="" />
      </div>
    </div>
  );
}
