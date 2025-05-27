import QuizPage from "../components/QuizPage";

export default function Wrong() {
  const wrong = JSON.parse(localStorage.getItem("wrong") || "[]");
  return <QuizPage title="❌ 오답노트" data={wrong} />;
}