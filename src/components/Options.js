function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  function handelClick(index) {
    dispatch({ type: "newAnswer", payload: index });
  }
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={handelClick(index)}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
