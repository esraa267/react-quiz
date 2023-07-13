import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...currState, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...currState, status: "error" };
    case "start":
      return { ...currState, status: "start" };
    case "newAnswer":
      const question = currState.questions.at(currState.index);
      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + 1
            : currState.points,
      };
    case "nextQuestion":
      return { ...currState, index: currState.index + 1, answer: null };
    case "finished":
      return { ...currState, status: "finished" };
    default:
      return currState;
  }
}
function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((result) => result.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  useEffect(
    function () {
      if (index === questions.length - 1) {
        dispatch({ type: "finished" });
      }
    },
    [index]
  );
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <Progress
              index={index}
              numQuestions={questions.length}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
        {status === "start" && (
          <StartScreen numOfQuestions={questions?.length} dispatch={dispatch} />
        )}
        {status === "finished" && (
          <FinishScreen maxPossible={questions?.length} points={points} />
        )}
      </Main>
    </div>
  );
}

export default App;
