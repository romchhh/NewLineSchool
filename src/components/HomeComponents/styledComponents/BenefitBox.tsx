import "./css/BenefitBox.css"
export default function BenefitBox({title, content, image}:{title:string, content:string[], image:string}) {
    return (
        <div className="home-learning-benefits-box">
            <div className="home-learning-benefits-box-title">{title}</div>
            <div className="home-learning-benefits-box-content">
                {content.map((text, index) => {
                    return <div key={index} className="home-learning-benefits-box-content-container">
                        <div className="home-learning-benefits-box-content-check-mark"><img src="./assets/elements/checkMark.png" alt="" /></div>
                        <div className="home-learning-benefits-box-content-text">{text}</div>
                    </div>
                })}
            </div>
            <div className="home-learning-benefits-box-img">
                <img src={image} alt="" />
            </div>
        </div>
    )
}