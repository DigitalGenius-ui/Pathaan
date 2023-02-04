import React, { useState } from "react";
import "./Navigation.css";
import { FiHome } from "react-icons/fi";
import { MdRecentActors } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { motion as m } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  const nav = [
    {
      icon: FiHome,
      path: "/",
      className: "homeIcon",
    },
    {
      icon: MdRecentActors,
      path: "/casts",
      className: "castsIcon",
    },
    {
      icon: TfiGallery,
      path: "/gallery",
      className: "galleryIcon",
    },
  ];

  const handlePath = (path) => {
    setActiveNav(path);
    navigate(path);
  };
  return (
    <m.div
      className="navMenu"
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="nav">
        {nav.map((item, i) => (
          <span
            onClick={() => handlePath(item.path)}
            className={`icons ${item.className} 
            ${activeNav && location.pathname === item.path ? "active" : ""}`}
            key={i}
          >
            {<item.icon />}
          </span>
        ))}
      </div>
    </m.div>
  );
};

export default Navigation;
