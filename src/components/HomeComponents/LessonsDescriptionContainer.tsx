import "./css/LessonsDescriptionContainer.css";
import HighlightedText from "./styledComponents/HighlightedText";
export default function LessonsDescriptionContainer() {
    const listOfDescriptionText=[
        <><HighlightedText colorBack="#FDECB0">Навчання проходить у процесі спілкування,</HighlightedText> тому говорити англійською ви точно навчитесь</>,
        <><HighlightedText colorBack="#A0BFBD80">Граматика та лексика вивчається більш практично</HighlightedText> ніж теоритично і дуууже креативно</>,
        <><HighlightedText colorBack="#AE88AD80">Групові заняття</HighlightedText> (8-10 учнів)</>,
        <><HighlightedText colorBack="#FDECB0">Міні-групи</HighlightedText> (3-4)</>,
        <>Iндивідуальні заняття</>,
        <><HighlightedText colorBack="#AE88AD80">Відстежування прогресу</HighlightedText> за допомогою конструктивного фідбеку та тестів</>,
        <><HighlightedText colorBack="#A0BFBD80">Офлайн</HighlightedText> та <HighlightedText colorBack="#A0BFBD80">онлайн</HighlightedText> формати</>,
        <><HighlightedText colorBack="#FDECB0">Креативні домашки,</HighlightedText> які мають сенс</>,
        
    ]
    return (
    <div className="home-lessons-description-container">
        <div className="home-lessons-description-title">як проходять уроки</div>
        <div className="home-lessons-description-content">
            <div className="home-lessons-description-text-container">
                {listOfDescriptionText.map((text, index) => <div key={index} className="home-lessons-description-text-item">
                    <div className="home-lessons-description-number">{index+1}</div>
                    <div className="home-lessons-description-text">{text}</div>
                </div>)}
            </div>
            <div className="home-lessons-description-img">
                <img src="public/assets/images/lessonsDescription.jpg" alt="" />
            </div>
        </div>
    </div>
    );
}