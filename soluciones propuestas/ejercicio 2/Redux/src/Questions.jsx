import { useSelector } from 'react-redux';

function Questions() {
  const questions = useSelector((state) => state.questions);

  return (
    <div className="questions">
      <h2>Questions:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            { question.title }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
