import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { motion as m } from "framer-motion";

const Banner = () => {
  const movieType = ["action", "romantic", "criminal"];
  return (
    <div className="contents">
      <div className="title">
        <m.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          Pathaan
        </m.h1>
      </div>

      <div className="film_type">
        {movieType.map((type, i) => (
          <m.div
            key={i}
            className="type"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <p>{type}</p>
          </m.div>
        ))}
      </div>

      <div className="release">
        <m.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          exit={{ opacity: 0 }}
        >
          hindi - 25 January 2023 ( india ) 2h 26m
        </m.p>
      </div>

      <div className="details">
        <div className="details_title">
          <m.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            Story :
          </m.h1>
        </div>
        <m.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          exit={{ opacity: 0 }}
        >
          The mansions that once housed the wealthy are now the homes of the
          city's most dangerous criminals. An undercover cop and an ex-convict,
          along with several others, take down the drug lord who killed his
          father.
        </m.p>
      </div>

      <div className="trailer">
        <m.a
          href="https://www.youtube.com/watch?v=vqu4z34wENw" target="_blank"
          className="btn"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          exit={{ opacity: 0 }}
        >
          <BsPlayCircle />
          Trailer
        </m.a>
      </div>
    </div>
  );
};

export default Banner;
