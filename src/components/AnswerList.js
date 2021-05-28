import React, { useState } from "react";
import Answer from "./Answer";

const AnswerList = (props) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  

  const correctAnswerId = props.data.correctAnswerId;

  let correctOrIncorrect = " ";

  const listOfAnswers = props.data.answers.map((answer) => {
    const clickAnswer = () => {
      setSelectedAnswerId(answer.id);
     
    };

    if (selectedAnswerId === null) {
      correctOrIncorrect = "";
    } else if (selectedAnswerId === correctAnswerId) {
      correctOrIncorrect = "Correct";
    } else if (selectedAnswerId !== correctAnswerId) {
      correctOrIncorrect = "Incorrect";
    }

    let selectedStatus = false;

    if (selectedAnswerId === answer.id) {
      selectedStatus = true;
    }

    return (
      <div>
        <Answer
          key={answer.id}
          data={answer}
          onClick={clickAnswer}
          selectedStatus={selectedStatus}
        />
      </div>
    );
  });

  return (
    <div>
      {listOfAnswers}
      <div className="title">{correctOrIncorrect}</div>
    </div>
  );
};

export default AnswerList;
