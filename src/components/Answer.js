import React from "react";

const Answer = (props) => {
  let className = "answer";
  if (props.selectedStatus) {
    className = "selected";
  }

  return (
    <div className={className} onClick={props.onClick}>
      <p>{props.data.body}</p>
    </div>
  );
};

export default Answer;
