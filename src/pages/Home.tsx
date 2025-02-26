import "./css/Home.css";
import HomeMainBanner from "../components/HomeComponents/MainBanner";
import ForUsImportant from "../components/HomeComponents/ForUsImportant";
import ContainerStudyingLinks from "../components/HomeComponents/ContainerStudyingLinks";
import LessonsDescriptionContainer from "../components/HomeComponents/LessonsDescriptionContainer";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
export default function Home() {
    return (
        <div className="home-container">
            <HomeMainBanner />
            <ForUsImportant />
            <ContainerStudyingLinks />
            <LessonsDescriptionContainer />
            {/* <div className="home-free-lessons-container"></div> */}
            <FreeLessonContainer />
            <div className="home-learning-benefits-container"></div>
            <div className="home-test-container"></div>
            <div className="home-reviews-container"></div>
            <div className="home-free-lessons-container"></div>
        </div>
    );
}
