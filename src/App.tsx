import { createBrowserRouter, RouterProvider } from "react-router"
import Root from "./pages/Root"
import Home from "./pages/Home"
import ForSchoolchildren from "./pages/ForSchoolchildren"
import ForAdults from "./pages/ForAdults"
import PrepareForExams from "./pages/PrepareForExams"
import OurClubs from "./pages/OurClubs"
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
          element: <ForAdults />
        },
        {
          path: "/prepareForExams",
          element: <PrepareForExams />
        },
        {
          path: "/ourClubs",
          element: <OurClubs />
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