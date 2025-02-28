import "./css/ForSchoolchildren.css";
import SchoolchildrenBanner from "../components/SchoolchildrenComponents/SchoolchildrenBanner";
import FolderContent from "../components/SchoolchildrenComponents/FolderContent";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
export default function ForSchoolchildren() {
  const folderData = [
    {
      backgroundImg: "src/assets/elements/folderElement1.png",
      title: (
        <>
          1 - англійська для <br /> <span>дітей (1-4 класи)</span>
        </>
      ),
      bodyLeftUpperPart1Title: (
        <>
          Наш Фокус <br /> та Мета
        </>
      ),
      bodyLeftUpperPart2Title: (
        <>
          Навчальні <br /> програми
        </>
      ),
      bodyLeftUpperPart1Body: (
        <>
          Закохати наших найменших <br /> студентів у англійську мову і зробити
          навчання не тільки ігровим, активним <br /> та цікавим, але
          і продуктивним для міжнародних іспитив for Young Learners (Starters,
          Movers, Flyers), навчанні у школі, і просто для реального життя.
        </>
      ),
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені <br /> відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            <br /> Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Ігрова та рольова",
        "Навчаємось спілкуватись англійською завдяки взаємодії між учнями та вчителем",
        "Граматика та лексика подається у комунікативних іграх",
        "Цікаві методи, техніки та прийоми для запам’ятовування",
      ],
      lowerRightPartText: [
        "Творчі проекти в кінці кожного уроку",
        "Є доступ до онлайн вправ, вікторин та навчальних ігор",
        "Розмовний Арт Клуб “ Англійська Майстерня Cut and Talk ”",
        "Постійний зворотній зв’язок з батьками",
        "“Домашки” є і завжди будуть😁",
      ],
      bottomExtraCon: -60,
    },
    {
      backgroundImg: "src/assets/elements/folderElement2.png",
      title: (
        <>
          2 - навчання для <br /> <span>підлітків (5-9 класи)</span>
        </>
      ),
      bodyLeftUpperPart1Title: (
        <>
          Наш Фокус <br /> та Мета
        </>
      ),
      bodyLeftUpperPart2Title: (
        <>
          Навчальні <br /> програми
        </>
      ),
      bodyLeftUpperPart1Body: (
        <>
          Закохати у англійську  мову наших амбітних та активних підлітків і
          підвищити їх рівень у форматі , який вони люблять🥰 (так щоб  весь
          урок крутився навколо них) і який  100% буде результативним на
          міжнародних іспитах, у школі  та у реальному житті. 
        </>
      ),
      bodyLeftUpperPart2Body: (
        <>
          Всі наші програми розроблені <br /> відповідно загальноєвропейським
          стандартам володінням  іноземною мовою{" "}
          <span>
            Common European
            <br /> Framework of Reference and Cambridge Assessment English
          </span>
        </>
      ),
      bodyLeftLowwerPartTitle: <>Атмосфера Навчання</>,
      lowerLeftPartText: [
        "Максимально наближена до реального життя ",
        "Ненудна прокачка Скілів ( Listening, Reading, Writing та Speaking) яка заходить кожному нашому підлітку",
        "Доступ до інтерактивних онлайн вправ",
        "Рольові ігри для покращення спілкування",
        "Граматика та лексика- яка і розважає, і навчає",
      ],
      lowerRightPartText: [
        "Вчимося працювати з mind-maps та презентаціями з елементами інфографіки для вивчення та закріплення нового матеріалу",
        "Творчий підхід у використанні смартфонів",
        "Контроль знань кожний місяць та зворотній зв’язок з батьками",
        "Розмовний клуб для підлітків “ Lets talk about it”",
        "“Домашка” є і завжди буде",
        "Граматичний клуб для підлітків",
      ],
      bottomExtraCon: -80,
    },
  ];
  return (
    <div className="for-schoolchildren-container">
      <SchoolchildrenBanner />
      {folderData.map((data, index) => {
        return (
          <FolderContent
            key={index}
            backgroundImg={data.backgroundImg}
            title={data.title}
            bodyLeftUpperPart1Title={data.bodyLeftUpperPart1Title}
            bodyLeftUpperPart2Title={data.bodyLeftUpperPart2Title}
            bodyLeftUpperPart1Body={data.bodyLeftUpperPart1Body}
            bodyLeftUpperPart2Body={data.bodyLeftUpperPart2Body}
            bodyLeftLowwerPartTitle={data.bodyLeftLowwerPartTitle}
            lowerLeftPartText={data.lowerLeftPartText}
            lowerRightPartText={data.lowerRightPartText}
            bottomExtraCon={data.bottomExtraCon}
            type="expanded"
          />
        );
      })}
      <FolderContent
        title={
          <>
            3 - навчання для {" "}
            <span>
              підлітків <br /> (10-11 клас) Підготовка до НМТ
            </span>
          </>
        }
        backgroundImg="src/assets/elements/folderElement3.png"
        type="simple"
      />
      <FreeLessonContainer paddingTop={20}/>
    </div>
  );
}
