import "./css/FreeLessonContainer.css"
import { useState } from "react"
import InputFreeLessong from "./input/InputFreeLessong"
export default function FreeLessonContainer(){
    const [inputValueName, setInputValueName] = useState<string>("");
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState<string>("");
    const [inputValueEmail, setInputValueEmail] = useState<string>("");
    const handleSubmit = function(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("click or submit")
    }
    return (
        <>
            <div className="home-free-lessons-container">
                <div className="home-free-lessons-title">NEW LINE SCHOOL</div>
                <div className="home-free-lessons-content">
                    <div className="spin-arrow">
                        <img src="src/assets/elements/spin_arrow.png" alt="" />
                    </div>
                    <div className="home-free-lessons-text">отримай безкоштовний урок!</div>
                    <form action="" className="home-free-lessons-form" onSubmit={handleSubmit}>
                        <div className="home-free-lessons-form-inputs">
                            <InputFreeLessong inputValue={inputValueName} setInputValue={setInputValueName} placeholder="ім'я" type="text"/>
                            <InputFreeLessong inputValue={inputValuePhoneNumber} setInputValue={setInputValuePhoneNumber} placeholder="телефон" type="tel"/>
                            <InputFreeLessong inputValue={inputValueEmail} setInputValue={setInputValueEmail} placeholder="пошта" type="email"/>
                        </div>
                        <button className="home-free-lessons-form-btn">ВІДПРАВИТИ</button>
                    </form>
                </div>
            </div>
        </>
    )
}