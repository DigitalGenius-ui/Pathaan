import React from "react";
import "./Home.css";
import { motion as m } from "framer-motion";
import Banner from "./Banner";

const Home = () => {
  return (
    <main className="home">
      <m.div
        className="home_bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
        exit={{ opacity: 0 }}
      ></m.div>
      <Banner />
    </main>
  );
};

export default Home;
