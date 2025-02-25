import "./css/MainBanner.css";

export default function HomeMainBanner() {
    return (
        <div className="home-main-banner-container">
                <div className="home-main-banner-img">
                    <img src="src/assets/images/homeMainBanner.png" alt="" />
                </div>
                <button className="home-main-banner-btn">ЗАПИСАТИСЯ</button>
                <div className="home-main-banner-text">
                    <div className="home-main-banner-title">
                        <div className="home-main-banner-title-text-p1">
                            ITS <div></div> YOUR
                        </div>
                        <div className="home-main-banner-title-text-p2">
                            NEW <span>LINE</span>
                        </div>
                        <div className="home-main-banner-title-text-p3">SCHOOL</div>
                    </div>
                    <div className="home-main-banner-p">
                        Школа англійської мови та офіційний <br />
                        підготовчий центр <span>Cambridge Assessment English</span>
                    </div>
                </div>
            </div>
    )
}