import "./css/TestStartingPage.css";
import { useState, useEffect } from "react";
import InputFreeLessong from "../components/HomeComponents/input/InputFreeLessong";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
export default function TestStartingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setErrors] = useState<{
    name: boolean;
    phone: boolean;
    email: boolean;
  }>({
    name: false,
    phone: false,
    email: false,
  });
  const [isRegistrated, setIsRegistrated] = useState(false);
  const [inputValueName, setInputValueName] = useState("");
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { testTitleStarting, testDescription } = location.state;

  const handleClickStart = () => {
    const isNameEmpty = inputValueName.trim() === "";
    const isPhoneEmpty = inputValuePhoneNumber.trim() === "";
    const isEmailEmpty = inputValueEmail.trim() === "";

    setErrors({
      name: isNameEmpty,
      phone: isPhoneEmpty,
      email: isEmailEmpty,
    });

    if (isNameEmpty || isPhoneEmpty || isEmailEmpty) {
      //   alert("Заповніть всі поля");
      return;
    }

    setIsRegistrated(true);
  };

  const handleClickFinish = () => {
    console.log("finish");
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

  console.log("testTitleStarting", testTitleStarting.split("<br />"));
  return (
    <div className="test-starting-page">
      <div className="test-starting-page-btn-return-container">
        <button
          className="tests-page-btn-return"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft className="tests-page-btn-return-icon" /> повернутися
          назад
        </button>
      </div>
      <div className="test-starting-page-test-container">
        {/* <div className="test-starting-page-test-container-timer">40:00</div> */}
        <div className="test-starting-page-test-container-header">
          <div className="test-starting-page-test-container-header-title">
            {testTitleStarting.split("<br />").map((item: string) => {
              return (
                <>
                  {item}
                  <br />
                </>
              );
            })}
          </div>
          <div
            className="test-starting-page-test-container-header-description"
            dangerouslySetInnerHTML={{ __html: testDescription }}
          ></div>
          <div className="test-starting-page-test-container-registation">
            <div className="test-starting-page-test-container-attention">
              Введіть своє ім'я та контакти, щоб отримати результат тесту на
              пошту
            </div>
            <div className="test-starting-page-test-container-form-inputs">
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
          </div>
        </div>
        {isRegistrated ?
        (
            <div></div>
        )
        : ""
        }
        <div className="test-starting-page-test-container-form-btn-container">
          <button
            className="test-starting-page-test-container-form-btn"
            onClick={() => {
              isRegistrated ? handleClickFinish() : handleClickStart();
            }}
          >
            {isRegistrated ? "Закінчити тест" : "Почати тест"}
          </button>
        </div>
      </div>
    </div>
  );
}
