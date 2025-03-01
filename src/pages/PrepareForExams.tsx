import "./css/PrepareForExams.css";
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import PrepareForExamsBanner from "../components/PrepareForExamsComponents/PrepareForExamsBanner";
export default function PrepareForExams() {
    return <div className="prepare-for-exams-container">
        <PrepareForExamsBanner />
        <FreeLessonContainer />
        <div style={{height:50}}></div>
    </div>
}