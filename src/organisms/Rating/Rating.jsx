import React from "react";
import "./Rating.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

const Rating = ({ rate, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span className="rating" key={i} onClick={() => onClick(i)}>
            {rate > i ? <StarIcon /> : <StarOutlineIcon />}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
