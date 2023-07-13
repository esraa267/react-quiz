function StartScreen({ numOfQuestions, dispatch }) {
  function handelClick() {
    dispatch({ type: "start" });
  }
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numOfQuestions} question to test your React mastry</h3>
      <button className="btn btn-ui" onClick={handelClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
