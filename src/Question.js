import React from "react";

function Question(props) {
  return (
    <div className="question-card">
      <h3>{props.question}</h3>
      <div className="question-list">
        <input type="radio" value="1" name="hp-quizz" /> {props.answer_1}
        <br />
        <input type="radio" value="2" name="hp-quizz" /> {props.answer_2}
        <br />
        <input type="radio" value="3" name="hp-quizz" /> {props.answer_3}
        <br />
        <input type="radio" value="4" name="hp-quizz" /> {props.answer_4}
      </div>
    </div>
  );
}

export default Question;
