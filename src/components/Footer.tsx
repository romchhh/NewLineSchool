import "./css/Footer.css";
import { useEffect, useState } from "react";
export default function Footer({background}: {background: boolean}) {
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
    return <div className="footer-container" style={{backgroundImage: background ? "url('src/assets/background/back-footer.png')": "none", paddingTop: background ? 80 : 0, height: background ? (layoutForMainBanner === "desktop" ? 400: 600): 350}}>
        <div className="footer-info">
            <div className="footer-info-adress-container">
                <div className="footer-info-adress">
                    <h1>АДРЕСА</h1>
                    <h2>вул. Степана Бандери</h2>
                </div>
                <div className="footer-info-map">Подивитися на карті</div>
            </div>
            <div className="footer-info-contacts-container">
                <div className="footer-info-contacts">
                    <h1>КОНТАКТИ</h1>
                    <h2>+380</h2>
                    <h2>пошта@gmail.com</h2>
                </div>
                <div className="footer-info-socials">
                    <img src="src/assets/instagram-icon.png" alt="" className="footer-inst" />
                    <img src="src/assets/telegram-icon.png" alt="" className="footer-tg"/>
                </div>
            </div>  
            <div className="footer-info-work-schedule-container">
                <h1 className="">
                    ГРАФІК РОБОТИ
                </h1>
                <div>
                    <h2>ПН-ПТ:</h2>
                    <h2>СБ-НД:</h2>
                </div>
            </div>
        </div>
        <div className="footer-logo">
            <img src="src/assets/logo.png" alt="" />
        </div>
    </div>
}