function Progress({ index, numQuestions, points }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index}></progress>
      <p>
        Questions
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}/{numQuestions} points</strong>
      </p>
    </header>
  );
}

export default Progress;
