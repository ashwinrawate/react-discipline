import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import Contact from "./components/Contact";
import Error from "../src/components/Error";
import About from "../src/components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    error: <Error />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
root.render(<RouterProvider router={appRouter} />);
