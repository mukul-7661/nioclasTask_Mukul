import React from "react";
import "./Button.css";

function Button(props) {
  const clickHandler = () => {
    if (props.title == "prev") {
      props.setCount((count) => {
        return count - 1;
      });
    } else {
      props.setCount((count) => {
        return count + 1;
      });
    }
  };

  return (
    <button
      className="button"
      disabled={
        (props.count == 0 && props.title == "prev") ||
        (props.count == props.size - 1 && props.title == "next")
      }
      onClick={clickHandler}
    >
      {props.title}
    </button>
  );
}

export default Button;
