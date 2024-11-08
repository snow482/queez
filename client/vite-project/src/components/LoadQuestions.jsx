import { useParams } from "react-router-dom";
import Questions from "./Question";
import { useEffect, useState } from "react";

function LoadQuestions() {
  const {question_id} = useParams()
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const response = await fetch(`/api/questions`);
    const data = await response.json();
    console.log(data);
    console.log(response);
    setQuestions(data);
  }
const question = questions.find((el)=>el.id === +question_id)
  

  return (
    <>
      <p>Вопросы:</p>

      {question&&
      <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{question.question}{question.answer}</h5>

      </div>
    </div>}
    </>
  );
}

export default LoadQuestions;
