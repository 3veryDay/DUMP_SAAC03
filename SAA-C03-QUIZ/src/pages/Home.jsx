import QuizPage from "../components/QuizPage";
import quizData from "../quiz_data.json";
export default function Home() {
  return <QuizPage title="전체 문제" data={quizData} />;
}