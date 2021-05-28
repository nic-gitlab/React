import React from 'react'
import AnswerList from './AnswerList'
import Question from './Question'

const App = (props) => {
  return (
    <div className="grid-container app">
      <h1 className="title">React Quiz</h1>
      <Question data={props.data.question}/>
      <AnswerList data={props.data.question}/>
    </div>
  );
}

export default App
