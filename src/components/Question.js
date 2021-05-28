import React from "react";

const Question = (props) => {
  return (
    <div className="question">
      <h3>{props.data.body}</h3>
    </div>
  );
};

export default Question;
