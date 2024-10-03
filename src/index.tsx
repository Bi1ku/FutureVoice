import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Purpose from "./pages/Purpose/Purpose";
import LearnMore from "./pages/LearnMore/LearnMore";
import Explore from "./pages/Explore/Explore";
import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/purpose",
    element: <Purpose />,
  },
  {
    path: "learn-more",
    element: <LearnMore />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Background>
      <Navbar />
      <RouterProvider router={router} />
    </Background>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
