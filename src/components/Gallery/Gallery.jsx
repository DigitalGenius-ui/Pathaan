import React, { useRef, useState } from "react";
import "./Gallery.css";
import { motion as m, useAnimation } from "framer-motion";
import { data } from "./data";
import { settings } from "./Slider";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Gallery = () => {
  const [showImage, setShowImage] = useState(data[0]);
  const controls = useAnimation();
  const arrowRef = useRef();

  const active = arrowRef.current;
  console.log(active);

  const handleClick = (slide) => {
    setShowImage(slide);
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1 });
  };

  const displaySlider = data.map((slide) => (
    <m.div
      className="slide_image"
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img
        onClick={() => handleClick(slide)}
        className="slide_image"
        src={slide.img}
        alt="sliderImages"
      />
    </m.div>
  ));
  return (
    <div className="gallery">
      <m.div
        className="gallery_bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      ></m.div>

      <section className="slider">
        <div className="gallery_title">
          <m.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            exit={{ y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Gallery
          </m.h1>
        </div>
        <m.div
          className="show_image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <m.img
            animate={controls}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            src={showImage.img}
            alt="img"
          />
        </m.div>

        <main className="slideMe">
          <Slider ref={arrowRef} {...settings}>
            {displaySlider}
          </Slider>

          <m.div
            className="arrows"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span
              onClick={() => arrowRef.current?.slickNext()}
              className="prev"
            >
              <IoIosArrowForward />
            </span>
            <span
              onClick={() => arrowRef.current?.slickPrev()}
              className="next"
            >
              <IoIosArrowBack />
            </span>
          </m.div>
        </main>
      </section>
    </div>
  );
};

export default Gallery;
