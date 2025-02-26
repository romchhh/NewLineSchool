import "./css/LearningBenefitsContainer.css"
import BenefitBox from "./styledComponents/BenefitBox";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
export default function LearningBenefitsContainer() {
    const benefits = [
        {
            title:"атмосфера",
            contentText:[
                "Неймовірно мотивуюча та дружня",
                "Маленькі групи",
                "Регулярні зходи та спілкування"
            ],
            image:"src/assets/images/benefitsBoxImages/box1.png"
        },
        {
            title:"сертифіковані викладачі",
            contentText:["Celta teachers", "TKT teachers", "Досвід роботи з учнями різного віку та рівня"],
            image:"src/assets/images/benefitsBoxImages/box2.png"
        },
        {
            title:"гнучкі та зручні заняття",
            contentText:[
                "Oфлайн заняття проходять у Борисполі у зручному місці",
                "Oнлайн заняття проводяться на платформі Zoom",
                "Є також можливість поєднувати заняття в класі з онлайн-уроками",
                "Є ранкові, денні та вечірні заняття"
            ],
            image:"src/assets/images/benefitsBoxImages/box3.png"
        },
        {
            title:"Додаткові сервіси",
            contentText:[
                "Безкоштовне онлайн тестування на визначення рівня",
                "Розмовні клуби для малих та дорослих",
            ],
            image:"src/assets/images/benefitsBoxImages/box4.png"
        }
    ];
    return (
        <div className="home-learning-benefits-container">
            <div className="home-learning-benefits-title"><HighlightedTextWithDots colorText="#ffffff" colorBackground="#A0BFBDB2" colorDots="#A0BFBD" widthBorder={3} widthDots={10}>переваги</HighlightedTextWithDots> навчання в нашій школі</div>
            <div className="home-learning-benefits-boxes-container">
                {/* <BenefitBox title={benefits[0].title} content={benefits[0].contentText} image={benefits[0].image}/> */}
                {benefits.map((benefit, index) => {
                    return <BenefitBox key={index} title={benefit.title} content={benefit.contentText} image={benefit.image}/>
                })}
            </div>
        </div>
    )
}