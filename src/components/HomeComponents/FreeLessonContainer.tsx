import "./css/FreeLessonContainer.css"
import { useState } from "react"
export default function FreeLessonContainer(){
    const [inputValue, setInputValue] = useState<string>("");
    return (
        <>
            <div className="spin-arrow"></div>
            <div className="home-free-lessons-container">
                <div className="home-free-lessons-title">NEW LINE SCHOOL</div>
                <div className="home-free-lessons-content">
                    <div className="home-free-lessons-text">отримай безкоштовний урок!</div>
                    <form action="" className="home-free-lessons-form">
                        <div className="home-free-lessons-form-inputs">
                            <input type="text" value={inputValue} onChange={(e)=>{
                                setInputValue(e.target.value)
                            }}/>
                        </div>
                        <button className="home-free-lessons-form-btn">ВІДПРАВИТИ</button>
                    </form>
                </div>
            </div>
        </>
    )
}