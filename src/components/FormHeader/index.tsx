import { data } from "../../data/data";
import { answerT } from "../../types/questions";
import Question from "../Quiz/Question";
import QuizButtons from "../Quiz/QuizButton";

interface QuizProps {
  currentQuestion: number;
  answers: answerT[];
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  done: () => void;
  setAnswers: React.Dispatch<React.SetStateAction<answerT[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
const Quiz = ({
  currentQuestion,
  answers,
  setCurrentQuestion,
  done,
  setScore,
  setAnswers,
}: QuizProps) => {
  const next = () => {
    const hasNextQuestion = data[currentQuestion + 1];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    hasNextQuestion ? setCurrentQuestion(currentQuestion + 1) : done();
  };
  const back = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };
  const onAnswer = (selectedId: number, questionId: number) => {
    const isQuestionAnswered = answers.some(
      (item) => item.questionId === questionId
    );

    if (isQuestionAnswered) {
      const index = answers.findIndex(
        (answer) => answer.questionId === questionId
      );

      if (answers[index].isCorrect) {
        setScore((prevscore) => -1);
      }
      answers.splice(index, 1);
    }
    const isCorrect = data[currentQuestion].correctOption.id === selectedId;

    const answer = {
      questionId,
      answerId: selectedId,
      isCorrect,
    };

    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    next();
  };
  return (
    <>
      <div className="w-full flex items-center justify-center mt-5 mb-10">
        <span className="font-medium text-[17px] text-slate-700">
          {data[currentQuestion].title}
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-5 md:justify-between justify-center w-[80%] mx-auto mb-5">
        {data[currentQuestion].options.map((Option) => {
          return (
            <Question
              onAnswer={onAnswer}
              answers={answers}
              option={Option}
              key={Option.id}
            />
          );
        })}
      </div>
      <QuizButtons next={next} back={back} currentQuestion={currentQuestion} />
    </>
  );
};

export default Quiz;
