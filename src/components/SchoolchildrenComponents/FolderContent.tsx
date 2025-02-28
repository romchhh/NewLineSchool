import "./css/FolderContent.css";
import { ReactNode } from "react";
import ContainerAboutLessons from "./ContainerAboutLessons";
interface FolderContentProps {
  backgroundImg: string;
  title: ReactNode;
  bodyLeftUpperPart1Title?: ReactNode;
  bodyLeftUpperPart2Title?: ReactNode;
  bodyLeftUpperPart1Body?: ReactNode;
  bodyLeftUpperPart2Body?: ReactNode;
  bodyLeftLowwerPartTitle?: ReactNode;
  lowerLeftPartText?: string[] | undefined;
  lowerRightPartText?: string[] | undefined;
  bottomExtraCon?: number;
  type: string;
  bodyCenterElements: ReactNode[];
  bodyBottomElements: ReactNode[];
}

export default function FolderContent({
  backgroundImg,
  title,
  bodyLeftUpperPart1Title,
  bodyLeftUpperPart2Title,
  bodyLeftUpperPart1Body,
  bodyLeftUpperPart2Body,
  bodyLeftLowwerPartTitle,
  lowerLeftPartText,
  lowerRightPartText,
  bottomExtraCon,
  type,
  bodyCenterElements,
  bodyBottomElements,
}: FolderContentProps) {

  let body;
  if (type === "expanded") {
    body = (
      <div className="expanded-folder-content-body">
        <div className="expanded-folder-content-body-left">
          <div className="expanded-folder-content-body-left-upper-part-container">
            <div className="expanded-folder-content-body-left-upper-part1">
              <div className="body-left-upper-part1-title">
                {bodyLeftUpperPart1Title}
              </div>
              <div className="body-left-upper-part1-text">
                {bodyLeftUpperPart1Body}
              </div>
            </div>
            <div className="expanded-folder-content-body-left-upper-part2">
              <div className="body-left-upper-part2-title">
                {bodyLeftUpperPart2Title}
              </div>
              <div className="body-left-upper-part2-text">
                {bodyLeftUpperPart2Body}
              </div>
            </div>
          </div>
          <div className="expanded-folder-content-body-left-lower-part-container">
            <div className="body-left-lower-part-body-left">
              <div className="body-left-lower-part-title">
                {bodyLeftLowwerPartTitle}
              </div>
              <div className="body-left-lower-part-left-text">
                {lowerLeftPartText?.map((text, index) => (
                  <div key={index} className="lower-part-text-item">
                    <div className="lower-part-text-item-img">
                      <img
                        src="src/assets/elements/wierd_arrow_right.png"
                        alt=""
                      />
                    </div>
                    <div className="lower-part-text-item-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="body-left-lower-part-body-right-text">
              {lowerRightPartText?.map((text, index) => (
                <div key={index} className="lower-part-text-item">
                  <div className="lower-part-text-item-img">
                    <img
                      src="src/assets/elements/wierd_arrow_right.png"
                      alt=""
                    />
                  </div>
                  <div className="lower-part-text-item-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="expanded-folder-content-body-right">
          <ContainerAboutLessons bodyCenterElements={bodyCenterElements} bodyBottomElements={bodyBottomElements} btnHeight={50} btnWidth={210}/>
        </div>
      </div>
    );
  } else {
    body = (
      <div className="folder-content-body">
        <div className="folder-content-body-info-container">
          <div className="folder-content-body-info-container-title">
            Наш Фокус <br /> та Мета
          </div>
          <div className="folder-content-body-info-container-text p1">
            Підготувати  до НМТ з англійської мови та допомогти набрати
            максимальну кількість балів
          </div>
          <div className="folder-content-body-info-container-text p2">
            Цей курс розрахований на два роки для дітей 10-11 класів. Під час
            цього курсу наші студенти  дізнаються про всі стратегії та тонкощі
            ефективного складання тесту. Також ретельно тренуються  над всіма
            типами завдань з  кожної секції.
          </div>
          <div className="folder-content-body-info-container-text p3">
            Кожний скіл такий як Listening, Use of English, Reading, Writing все
            одно прокачується ретельно, на випадок змін у формі проведення
            вступного іспиту, так щоб нашим студентам було легко
            перелаштуватись.
          </div>
        </div>
        <div className="folder-content-body-img">
          <img src="src/assets/images/folderImage.png" alt="" />
        </div>
        <div className="folder-content-body-info-studying">
          <ContainerAboutLessons bodyCenterElements={bodyCenterElements} bodyBottomElements={bodyBottomElements}/>
        </div>
      </div>
    );
  }
  return (
    <div
      className="expanded-folder-content-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        minHeight: type === "expanded" ? 830 : 740,
        marginTop: type === "expanded" ? 60 : 170,
        marginBottom: type === "expanded" ? 140 : 50,
      }}
    >
      <div
        className="expanded-folder-content"
        style={{
          paddingLeft: type === "expanded" ? 105 : 105,
          paddingRight: type === "expanded" ? 105 : 80,
        }}
      >
        <div className="expanded-folder-content-title">{title}</div>
        {body}
      </div>
      {type === "expanded" ? (
        <div
          className="expanded-folder-content-extra-container"
          style={{ bottom: bottomExtraCon }}
        >
          “В кінці курсу наші студенти зможуть підтвердити свої знання на
          Міжнародних іспитах Кембриджа для дітей (Young Learners): Starters,
          Movers, Flyers у екзаменаційному центрі Оxford Klass з яким  ми
          співпрацюємо”
        </div>
      ) : null}
    </div>
  );
}
