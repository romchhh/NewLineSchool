import "./css/ContainerStudyingLinks.css";
import StyledContainerLink from "./styledComponents/StyledContainerLink";
import StyledMobileContainerLink from "./styledComponents/StyledMobileContainerLink";
import { useEffect, useState } from "react";
export default function ContainerStudyingLinks() {
  const [layoutForMainBanner, setLayoutForMainBanner] = useState("desktop");
  const condition = window.innerWidth < 768;
  const studyingLinks = [
    {
      text: (
        <>
          навчання для {condition ? null :<br />} дітей (1-4 класи)
        </>
      ),
      link: "/forSchoolchildren",
    },
    {
      text: (
        <>
          навчання для підлітків <br /> (5-9 класи)
        </>
      ),
      link: "/forSchoolchildren",
    },
    {
      text: <>Англійська для підлітків (10-11 клас) Підготовка до НМТ</>,
      link: "/forSchoolchildren",
    },
    {
      text: (
        <>
          Англійська для дорослих <br /> A0 - C1
        </>
      ),
      link: "/forAdults",
    },
    { text: <>розмовні клуби</>, link: "/clubs" },
    { text: <>підготовка до cambridge exams</>, link: "/prepareForExams" },
    { text: <>Підготовка до ЄВІ</>, link: "/prepareForExams" },
  ];
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
  let content;
  if (layoutForMainBanner === "desktop") {
    content = studyingLinks.map((link, index) => (
      <StyledContainerLink key={index} link={link.link}>
        {link.text}
      </StyledContainerLink>
    ));
  } else {
    content = studyingLinks.map((link, index) => (
      <div className="home-links-to-studying-container-link-con" key={index}>
        <StyledMobileContainerLink  link={link.link}>
            {link.text}
        </StyledMobileContainerLink>
      </div>
    ));
  }

  return (
    <div
      className={`home-links-to-studying-container ${
        layoutForMainBanner === "mobile" ? "mobile" : ""
      }`}
    >
      {content}
    </div>
  );
}
