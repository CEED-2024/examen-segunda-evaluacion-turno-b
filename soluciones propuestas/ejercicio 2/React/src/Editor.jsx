import QuestionForm from './QuestionForm';
import Questions from './Questions';

import { useState } from 'react';

const initialQuestions = [
];

function Editor() {

  const [questions, setQuestions] = useState(initialQuestions);

  function onFormSubmit(question) {
    setQuestions([...questions, question]);
  }

  return (
    <div id="quiz-editor">
      <h1>Quiz editor</h1>
      <QuestionForm onFormSubmit={onFormSubmit} />
      <Questions questions={questions} />
    </div>
  )
}

export default Editor
