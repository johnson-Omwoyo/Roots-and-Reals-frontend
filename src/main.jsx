import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes.jsx";
const Router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router}></RouterProvider>
);
