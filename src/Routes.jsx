import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Nursery from "./routes/Nursery";
import Contact from "./routes/Contact";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error Occured",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "nursery", element: <Nursery /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
export default routes;
