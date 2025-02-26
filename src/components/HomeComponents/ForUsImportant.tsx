import "./css/ForUsImportant.css";
import HighlightedTextWithDots from "./HighlightedTextWithDots";
export default function ForUsImportant() {
  return (
    <div className="home-for-us-important-main-container">
      <div className="scroll-to-see-more">
        SCROLL TO SEE MORE
        <img src="src/assets/elements/arrow_bottom.png" alt="" />
      </div>
      <div className="home-for-us-important-container">
        <div className="home-for-us-important-title-container">
          <div className="home-for-us-important-title">ДЛЯ НАС ВАЖЛИВО</div>
          <div className="home-for-us-important-title-subtitles-container">
            <div className="home-for-us-important-title-subtitle p1">надихати</div>
            <div className="home-for-us-important-title-subtitle p2">мотивувати</div>
            <div className="home-for-us-important-title-subtitle p3">спонукати до ефективного вивчення мови</div>
          </div>
        </div>
        <div className="home-for-us-important-content">
          <div className="home-for-us-important-img">
            <img src="src/assets/images/forUsImportant.png" alt="" />
          </div>
          <div className="home-for-us-important-text-container">
            <div className="home-for-us-important-text-title">
            A також ми допоможемо вам підняти рівень англійської, щоб наші студенти могли:
            </div>
            <div className="home-for-us-important-text">
            <HighlightedTextWithDots colorBackground="#BFA0BEB2" colorDots="#AE88AD">Впевнено спілкуватися</HighlightedTextWithDots>: вільно спілкуватися в повсякденному житті, подорожувати та будувати міжнародну кар’єру.
            </div>
            <div className="home-for-us-important-text">
            <HighlightedTextWithDots colorBackground="#A0BFBD66" colorDots="#A0BFBD">Скласти міжнародні іспити</HighlightedTextWithDots>: успішно підготуватися до Cambridge Exams, НМТ та  ЄВІ.
            </div>
            <div className="home-for-us-important-text">
            <HighlightedTextWithDots colorBackground="#FCE69699" colorDots="#FCE696">Досягти академічних успіхів</HighlightedTextWithDots>: легко розуміти навчальний матеріал та ефективно спілкуватися з викладачами
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
