import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useState, useEffect } from "react";
import "./Question.css";

function Question({ questionID }) {
  const [events, setEvents] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=" +
          questionID
      );
      const responseData = await response.json();
      //   console.log(responseData);
      const loadedEvents = responseData[0].Question;

      //   console.log(loadedEvents);

      setEvents(loadedEvents);
    };
    fetchEvents();
  }, [questionID]);

  // const config = {
  //   loader: { load: ["input/asciimath"] },
  // };

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };

  return (
    <MathJaxContext className="question__div" config={config}>
      <MathJax className="question">{events}</MathJax>
    </MathJaxContext>
  );
}

export default Question;
