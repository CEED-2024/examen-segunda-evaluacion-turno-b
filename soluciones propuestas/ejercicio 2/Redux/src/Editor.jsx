import QuestionForm from './QuestionForm';
import Questions from './Questions';

function Editor() {
  return (
    <div id="quiz-editor">
      <h1>Quiz editor</h1>
      <QuestionForm />
      <Questions />
    </div>
  );
}

export default Editor;
