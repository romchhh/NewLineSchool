import "./css/ContainerStudyingLinks.css";
import StyledContainerLink from "./styledComponents/StyledContainerLink";
export default function ContainerStudyingLinks() {
    const studyingLinks = [
        {text: <>навчання для <br/> дітей (1-4 класи)</>, link: "/forSchoolchildren"},
        {text: <>навчання для підлітків <br/> (5-9 класи)</>, link: "/forSchoolchildren"},
        {text: <>Англійська для підлітків (10-11 клас) Підготовка до НМТ</>, link: "/forSchoolchildren"},
        {text: <>Англійська для дорослих <br/> A0 - C1</>, link: "/forAdults"},
        {text: <>розмовні клуби</>, link: "/clubs"},
        {text: <>підготовка до cambridge exams</>, link: "/prepareForExams"},
        {text: <>Підготовка до ЄВІ</>, link: "/prepareForExams"},
    ];
    return <div className="home-links-to-studying-container">
        {
            studyingLinks.map((link, index) => (
                <StyledContainerLink key={index} link={link.link}>{link.text}</StyledContainerLink>
            ))
        }
    </div>
}