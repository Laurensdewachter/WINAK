import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About.tsx";
import ActivitiesPage from "./pages/Activities.tsx";
import ContactPage from "./pages/Contact.tsx";
import ErrorPage from "./pages/Error.tsx";
import HomePage from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";
import PartnershipsPage from "./pages/Partnerships.tsx";
import RegisterPage from "./pages/Register.tsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "over-ons/",
    element: <AboutPage />,
  },
  {
    path: "activiteiten/",
    element: <ActivitiesPage />,
  },
  {
    path: "partnerships/",
    element: <PartnershipsPage />,
  },
  {
    path: "contact/",
    element: <ContactPage />,
  },
  {
    path: "login/",
    element: <LoginPage />,
  },
  {
    path: "register/",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
