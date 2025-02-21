import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from './redux/questionsSlice';

function QuestionForm() {
  const dispatch = useDispatch();

  // También sería correcto mantener el estado del formulario en el slice
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(-1);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !question || !answers.every(answer => answer) || correctAnswer === -1) return;
    dispatch(addQuestion({ title, question, answers, correct: correctAnswer }));
    setTitle('');
    setQuestion('');
    setAnswers(['', '', '', '']);
    setCorrectAnswer(-1);
  };

  return (
    <div className="editor">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>
            Title:
          </label>
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="row">
          <label>
            Question:
          </label>
          <input type="text" name="question" value={question} onChange={e => setQuestion(e.target.value)}/>
        </div>
        {answers.map((answer, index) => (
          <div className="row" key={index}>
            <label>
              Answer {index + 1}:
            </label>
            <input type="text" value={answer} onChange={e => handleAnswerChange(index, e.target.value)} />
            <label>
              <input type="radio" name="correct" checked={correctAnswer === index} onChange={() => setCorrectAnswer(index)} /> Correct
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;
