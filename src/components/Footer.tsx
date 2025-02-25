import "./css/Footer.css";
export default function Footer() {
    return <div className="footer-container">
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