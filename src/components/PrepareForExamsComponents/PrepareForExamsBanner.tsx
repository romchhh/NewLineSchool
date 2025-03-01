import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import "./css/PrepareForExamsBanner.css";
export default function PrepareForExamsBanner() {
    const bannerMidText=[
        "Підвищити рівень академічної англійської (відповідна граматика та словниковий запас)",
        "Ознайомити з форматом іспиту",
        "Відпрацювати всі вправи з кожної частини іспиту",
        "Навчити стратегіям успішноі здачі",
        "Організувати пробний іспит"
    ]
  return (
    <div className="prepare-for-exams-banner">
      <div className="prepare-for-exams-banner-title">Підготовка до <br /><HighlightedTextWithDots colorText="#ffffff" colorBackground="#BFA0BEB2" colorDots="#AE88AD" widthDots={10} widthBorder={4}>Сambridge Exams</HighlightedTextWithDots></div>
      <div className="prepare-for-exams-banner-left">
        <div className="pepare-for-exams-banner-left-upper">
          У 2021 році New Line School стала офіційним  підготовчим центром {""}
          <br /><span>Cambridge Assessment English</span> <br />І тепер ми професійно  готуємо до таких
          іспитів:
        </div>
        <div className="pepare-for-exams-banner-left-lower">
          A1 KEY (KET)+ for schools <br /> B1 Preliminary (PET)+for schools <br /> B2 First
          (FCE)+ for schools <br /> C1 Advanced (CAE) <br /> C2 Proficiency
        </div>
      </div>
      <div className="prepare-for-exams-banner-mid">
        <div className="prepare-for-exams-banner-mid-title">Саме тут ми допомагаємо:</div>
        <div className="prepare-for-exams-banner-mid-body">
            {bannerMidText.map((text, index) => {
                return <div key={index} className="prepare-for-exams-banner-mid-body-item">
                    <div className="prepare-for-exams-banner-mid-body-item-img">
                        <img src="src/assets/elements/arrow_right.png" alt="" />
                    </div>
                    <div className="prepare-for-exams-banner-mid-body-item-text">{text}</div>
                </div>
            })}
        </div>
      </div>
      <div className="prepare-for-exams-banner-right">
        <img src="src/assets/images/PrepareForExamsBanner.png" alt="" />
      </div>
    </div>
  );
}
