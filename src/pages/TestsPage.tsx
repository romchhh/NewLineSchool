import "./css/TestsPage.css";
import { useNavigate } from "react-router-dom";
import {test_descriptions} from "../dicts/test";
import { FaArrowLeft } from "react-icons/fa6";
export default function TestsPage(){
    const navigate = useNavigate();
    const testTitles = [
        {
            id:"test_1",
            title_elem:<>Англійська для дітей <br />(1-4 класи)</>,
            title:"Англійська для дітей <br />(1-4 класи)"
        },
        {
            id:"test_2",
            title_elem:<>Англійська для підлітків <br /> (5-9 класи)</>,
            title:"Англійська для підлітків <br />(5-9 класи)"
        },
        {
            id:"test_3",
            title_elem:<>Англійська для підлітків <br /> (10-11 клас)</>,
            title:"Англійська для підлітків <br />(10-11 клас)",

        },
        {
            id:"test_4",
            title_elem:<>Англійська для дорослих <br />(Adults 18+)</>,
            title:"Англійська для для дорослих <br />(Adults 18+)"
        }
    ]
    return <div className="tests-page">
        <div className="tests-page-btn-return-container">
            <button className="tests-page-btn-return" onClick={()=>{
                navigate(-1);
            }}><FaArrowLeft className="tests-page-btn-return-icon"/> повернутися назад</button>
        </div>
        <div className="tests-page-container">
            <div className="tests-page-container-title">Безкоштовний тест на рівень англійської</div>
            <div className="tests-page-container-body">
                {testTitles.map((testTitle)=>{
                    return <div className="tests-page-container-body-test" key={testTitle.id} onClick={()=>{
                        navigate(`/tests/${testTitle.id}`, {
                            state: {testTitleStarting: testTitle.title, testDescription: test_descriptions[testTitle.id]}
                        });
                    }}>
                        <div className="tests-page-container-body-test-text">{testTitle.title_elem}</div>
                        <button className="tests-page-container-body-test-button"><img src="src/assets/elements/arrow_right_white.png" alt="" /></button>
                    </div>
                })}
            </div>
        </div>
    </div>
}