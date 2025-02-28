import "./css/ForAdults.css";
import AdultsBanner from "../components/AdultsComponents/AdultsBanner";
import TestContainer from "../components/HomeComponents/TestContainer";
import Footer from "../components/Footer";
import AdultsAboutLessons from "../components/AdultsComponents/AdultsAboutLessons";
export default function ForAdults(){
    return <div className="for-adults-container">
        <AdultsBanner />
        <AdultsAboutLessons />
        <TestContainer backImg="src/assets/background/backForTest2.png" backIsImg={false} footer={<Footer background={false}/>}/>
    </div>
}