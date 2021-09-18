import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

import classes from "./Card.module.css";

const Card = (props) => {

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <div className={classes.card}>
      <img
        src={props.url}
        alt='Nasa api returns a media url i.e a youtube url not a valid url to display'
        style={{ width: "100%" }}
      />

      <div className={classes.container}>
        <h4>
          <b>{props.title}</b>
        </h4>
        <p> {props.date}</p>
        <p>{props.explanation}</p>
      </div>

      <div className={classes.like}>
        {like && (
          <i
            className='fa'
            style={{ fontSize: "25px", color: "#24a0ed" }}
            onClick={likeHandler}
          >
            &#xf087;
          </i>
        )}

        {!like && (
          <i
            className='fa'
            style={{ fontSize: "25px", color: "black" }}
            onClick={likeHandler}
          >
            &#xf087;
          </i>
        )}
      </div>
    </div>
  );
};

export default Card;
