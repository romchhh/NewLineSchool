import { createBrowserRouter, RouterProvider } from "react-router"
import Root from "./pages/Root"
import Home from "./pages/Home"
import ForSchoolchildren from "./pages/ForSchoolchildren"
export default function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/forSchoolchildren",
          element: <ForSchoolchildren />
        },
        {
          path: "/forAdults",
          element: <div>For Adults</div>
        },
        {
          path: "/prepareForExams",
          element: <div>Prepare for Exams</div>
        },
        {
          path: "/clubs",
          element: <div>Clubs</div>
        },
        {
          path: "/contacts",
          element: <div>Contacts</div>
        }
      ]
    }
  ])



  return <RouterProvider router={router} />
}