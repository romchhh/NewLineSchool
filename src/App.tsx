import { HashRouter, Routes, Route } from "react-router-dom"
import Root from "./pages/Root"
import Home from "./pages/Home"
import ForSchoolchildren from "./pages/ForSchoolchildren"
import ForAdults from "./pages/ForAdults"
import PrepareForExams from "./pages/PrepareForExams"
import OurClubs from "./pages/OurClubs"
import TestsPage from "./pages/TestsPage"
import TestStartingPage from "./pages/TestStartingPage"

export default function App(){
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/forSchoolchildren" element={<ForSchoolchildren />} />
          <Route path="/forAdults" element={<ForAdults />} />
          <Route path="/prepareForExams" element={<PrepareForExams />} />
          <Route path="/ourClubs" element={<OurClubs />} />
          <Route path="/contacts" element={<div>Contacts</div>} />
        </Route>
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/tests/:testId" element={<TestStartingPage />} />
      </Routes>
    </HashRouter>
  )
}