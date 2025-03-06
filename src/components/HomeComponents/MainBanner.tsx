import "./css/MainBanner.css";
import { useEffect, useState } from "react";
export default function HomeMainBanner() {
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

  return (
    <div className="home-main-banner-container">
      <div className="home-main-banner-title">
          <div className="home-main-banner-title-text-p1">
            ITS <div></div> YOUR
          </div>
          <div className="home-main-banner-title-text-p2">
            NEW <span>LINE</span>
          </div>
          <div className="home-main-banner-title-text-p3">SCHOOL</div>
        </div>
        <div className="home-main-banner-img">
          <img src="./assets/images/homeMainBanner.png" alt="" />
        </div>
        <div className="home-main-banner-p">
          Школа англійської мови та офіційний {layoutForMainBanner==="mobile"? null: <br/>}
          підготовчий центр {layoutForMainBanner==="mobile"? <br/>: null}<span>Cambridge Assessment English</span>
        </div>
        <button className="home-main-banner-btn">ЗАПИСАТИСЯ</button>
    </div>
  );
}
