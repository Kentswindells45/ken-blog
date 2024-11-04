interface QuizButtonsProps {
  currentQuestion: number;
  next: () => void;
  back: () => void;
}

const QuizButtons = ({ currentQuestion, next, back }: QuizButtonsProps) => {
  return (
    <div className="flex flex-row-reverse gap-5 items-center justify-center w-full mt-8 mb-3">
      <button
        type="button"
        onClick={() => next()}
        className="rounded-full bg-slate-600 py-3 text-white font-medium"
      >
        Skip
      </button>
      <button
        type="button"
        onClick={() => back()}
        className={
          currentQuestion >= 1
            ? "rounded-full bg-white border border-slate-600 py-3 px-12 text-slate-600 font-medium block"
            : "rounded-full bg-white border border-slate-600 py-3 px-10 text-slate-600 font-medium hidden"
        }
      >
        Back
      </button>
    </div>
  );
};

export default QuizButtons;
