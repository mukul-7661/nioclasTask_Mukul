import React from "react";
import "./Number.css";

function Number(props) {
  const clickHandler = () => {
    props.setCount(props.QuestionNumber);
  };

  return (
    <button
      onClick={clickHandler}
      className={
        props.count == props.QuestionNumber
          ? "number__button__colored"
          : "number__button"
      }
    >
      {props.QuestionNumber + 1}
    </button>
  );
}

export default Number;
