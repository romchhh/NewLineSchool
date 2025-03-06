import "./css/Home.css";
import HomeMainBanner from "../components/HomeComponents/MainBanner";
import ForUsImportant from "../components/HomeComponents/ForUsImportant";
import ContainerStudyingLinks from "../components/HomeComponents/ContainerStudyingLinks";
import LessonsDescriptionContainer from "../components/HomeComponents/LessonsDescriptionContainer";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import LearningBenefitsContainer from "../components/HomeComponents/LearningBenefitsContainer";
import TestContainer from "../components/HomeComponents/TestContainer";
import ReviewsContainer from "../components/HomeComponents/ReviewsContainer";
export default function Home() {
    return (
        <div className="home-container">
            <HomeMainBanner />
            <ForUsImportant />
            <ContainerStudyingLinks />
            <LessonsDescriptionContainer />
            <FreeLessonContainer />
            <LearningBenefitsContainer />
            <TestContainer backImg="./assets/background/backForTest.png"/>
            <ReviewsContainer/>
            <FreeLessonContainer />
            <div style={{height:135, backgroundColor:"#ffffff"}}></div>
        </div>
    );
}
