import "./css/Home.css";
import HomeMainBanner from "../components/HomeComponents/MainBanner";
import ForUsImportant from "../components/HomeComponents/ForUsImportant";
export default function Home() {
    return (
        <div className="home-container">
            <HomeMainBanner />
            {/* <div className="home-for-us-important-main-container">
                <div className="scroll-to-see-more">SCROLL TO SEE MORE <img src="src/assets/elements/arrow_bottom.png" alt="" /></div>
                <div className="home-for-us-important-container">
                    <div className="home-for-us-important-title-container">
                        <div className="home-for-us-important-title">ДЛЯ НАС ВАЖЛИВО</div>
                        <div className="home-for-us-important-title-underline"></div>
                    </div>
                    <div className="home-for-us-important-content">
                        <div className="home-for-us-important-img">2313</div>
                        <div className="home-for-us-important-text">33</div>
                    </div>
                </div>
            </div> */}
            <ForUsImportant />
            <div className="home-links-to-studying-container"></div>
            <div className="home-instruction-steps-container"></div>
            <div className="home-free-lessons-container"></div>
            <div className="home-learning-benefits-container"></div>
            <div className="home-test-container"></div>
            <div className="home-reviews-container"></div>
            <div className="home-free-lessons-container"></div>
        </div>
    );
}
