import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home"
import About from "./About"
import Rooms from "./Rooms"
import Restaurant from "./restaurant"
import ConHall from "./Con-hall"
import Contact from "./contact"

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/room",
    element: <Rooms />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/conHall",
    element: <ConHall />,
  },

  {
    path: "/contact",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
