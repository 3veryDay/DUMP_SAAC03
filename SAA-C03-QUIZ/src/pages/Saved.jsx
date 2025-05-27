import QuizPage from "../components/QuizPage";

export default function Saved() {
  const saved = JSON.parse(localStorage.getItem("saved") || "[]");
  return <QuizPage title="⭐ 저장한 문제" data={saved} />;
}