import "./css/FreeLessonContainer.css";
import { useEffect, useState } from "react";
import InputFreeLessong from "./input/InputFreeLessong";
export default function FreeLessonContainer({
  paddingTop = 75,
}: {
  paddingTop?: number;
}) {
  const [inputValueName, setInputValueName] = useState<string>("");
  const [inputValuePhoneNumber, setInputValuePhoneNumber] =
    useState<string>("");
  const [inputValueEmail, setInputValueEmail] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [errors, setErrors] = useState<{
    name: boolean;
    phone: boolean;
    email: boolean;
  }>({
    name: false,
    phone: false,
    email: false,
  });
  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isNameEmpty = inputValueName.trim() === "";
    const isPhoneEmpty = inputValuePhoneNumber.trim() === "";
    const isEmailEmpty = inputValueEmail.trim() === "";

    setErrors({
      name: isNameEmpty,
      phone: isPhoneEmpty,
      email: isEmailEmpty,
    });

    if (isNameEmpty || isPhoneEmpty || isEmailEmpty) {
      return;
    }
    console.log("click or submit");
  };
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [window.innerWidth]);
  return (
    <>
      <div
        className="home-free-lessons-container"
        style={{ paddingTop: paddingTop }}
      >
        <div className="home-free-lessons-title">
          NEW LINE SCH{isMobile ? <br /> : ""}OOL
        </div>
        <div className="home-free-lessons-content">
          <div className="spin-arrow">
            <img src="src/assets/elements/spin_arrow.png" alt="" />
          </div>
          <div className="home-free-lessons-text">
            отримай безкоштовний урок!
          </div>
          <form
            action=""
            className="home-free-lessons-form"
            onSubmit={handleSubmit}
          >
            <div className="home-free-lessons-form-inputs">
              <InputFreeLessong
                inputValue={inputValueName}
                setInputValue={setInputValueName}
                isMobile={isMobile}
                placeholder="ім'я"
                type="text"
                hasError={errors.name}
                setError={(value) => setErrors({ ...errors, name: value })}
              />
              <InputFreeLessong
                inputValue={inputValuePhoneNumber}
                setInputValue={setInputValuePhoneNumber}
                isMobile={isMobile}
                placeholder="телефон"
                type="tel"
                hasError={errors.phone}
                setError={(value) => setErrors({ ...errors, phone: value })}
              />
              <InputFreeLessong
                inputValue={inputValueEmail}
                setInputValue={setInputValueEmail}
                isMobile={isMobile}
                placeholder="пошта"
                type="email"
                hasError={errors.email}
                setError={(value) => setErrors({ ...errors, email: value })}
              />
            </div>
            <button className="home-free-lessons-form-btn">ВІДПРАВИТИ</button>
          </form>
        </div>
      </div>
    </>
  );
}
