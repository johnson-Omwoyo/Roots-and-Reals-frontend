import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Botton from "./components/Botton";
import Donation from "./components/Modals";
export default function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModelOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Donation />
      {isModelOpen && <Donation />}
      <Navbar />
      <Outlet />

      <Botton />
    </div>
  );
}
