function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  function handelClick() {
    dispatch({ type: "nextQuestion" });
  }
  return (
    <button className="btn btn-ui" onClick={handelClick}>
      Next
    </button>
  );
}

export default NextButton;
