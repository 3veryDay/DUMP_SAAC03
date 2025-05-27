import { useState } from "react";
import "../App.css";

export default function QuizPage({ title, data }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const quiz = data[index] || {};
  const isCorrect = selected === quiz.answer;

  const handleSelect = (opt) => {
    if (!showAnswer) {
      setSelected(opt);
      setShowAnswer(true);

      if (opt !== quiz.answer) {
        const wrong = JSON.parse(localStorage.getItem("wrong") || "[]");
        if (!wrong.find((q) => q.id === quiz.id)) {
          localStorage.setItem("wrong", JSON.stringify([...wrong, quiz]));
        }
      }
    }
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
    setSelected(null);
    setShowAnswer(false);
  };

  const save = () => {
    const saved = JSON.parse(localStorage.getItem("saved") || "[]");
    if (!saved.find((q) => q.id === quiz.id)) {
      localStorage.setItem("saved", JSON.stringify([...saved, quiz]));
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-header">
        <h1>{title} - 문제 {quiz.id}</h1>
        <button className="save-btn" onClick={save}>⭐ 저장하기</button>
      </div>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{quiz.question}</p>

      {quiz.options &&
        Object.entries(quiz.options).map(([opt, text]) => {
          let className = "option-btn";
          if (showAnswer) {
            if (opt === quiz.answer) className += " correct";
            else if (opt === selected) className += " incorrect";
          }
          return (
            <button
              key={opt}
              className={className}
              onClick={() => handleSelect(opt)}
              disabled={showAnswer}
            >
              <strong>{opt}.</strong> {text}
            </button>
          );
        })}

      {showAnswer && (
        <div>
          <p className="result-msg" style={{ color: isCorrect ? "green" : "red" }}>
            {isCorrect ? "✅ 정답입니다!" : `❌ 오답입니다. 정답: ${quiz.answer}`}
          </p>
          <div className="explanation">{quiz.explanation}</div>
          <button className="next-btn" onClick={next}>다음 문제 →</button>
        </div>
      )}
    </div>
  );
}
