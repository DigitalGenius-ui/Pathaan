import React, { useState } from "react";
import "./Casts.css";
import { motion as m, useAnimation } from "framer-motion";
import { data } from "./data";

const Casts = () => {
  const [activeActor, setActiveActor] = useState(data[0]);
  const [text, setText] = useState(false);
  const controls = useAnimation();

  const handleClick = (person) => {
    setActiveActor(person);
    setText(false);
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1 });
  };

  return (
    <main className="casts">
      <m.div
        className="casts_bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      ></m.div>

      <div className="casts_details">
        <div className="casts_title">
          <m.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Pathaan Casts
          </m.h1>
        </div>

        <m.div
          className="stars"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="left">
            {data.map((person, i) => (
              <m.span
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 1, delay: 0.2 }}
                onClick={() => handleClick(person)}
                className={`${activeActor.name === person.name && "active"}`}
                key={i}
              >
                {person.name}
              </m.span>
            ))}
          </div>
          <m.div className="right" animate={controls}>
            <div className="actor_image">
              <m.img
                animate={controls}
                transition={{ duration: 1, delay: 0.5 }}
                src={activeActor.img}
                alt="actor"
              />
            </div>
            <div className="actor_name">
              <m.h1
                animate={controls}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {activeActor.name} as ({activeActor.position})
              </m.h1>
            </div>

            <div className="actor_details">
              <m.p
                animate={controls}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {text
                  ? activeActor.details
                  : `${activeActor.details.substring(0, 500)} ...`}
                <button
                  onClick={() => setText((prev) => !prev)}
                  className="details_btn"
                >
                  {text ? "show less" : "show more"}
                </button>
              </m.p>
            </div>
          </m.div>
        </m.div>
      </div>
    </main>
  );
};

export default Casts;
