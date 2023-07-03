import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import Profile from "./components/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
import store from "../utils/store";
import Cart from "./components/Cart";

// const heading2 = React.createElement("h2", { id: "heading2" }, "Heading 2");
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2]
// );

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Nikhil Chhetri",
    email: "nikhilchhetri09@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <HeaderComponent />
          <Outlet />
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
          <FooterComponent />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile name="Michael Scarn" />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
