import { useParams, useNavigate, redirect} from "react-router-dom";
//import Questions from "./Question";
import { useEffect, useState} from "react";

function LoadQuestions() {
  const navigate = useNavigate()
  const {question_id} = useParams()
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(null)
  const [isTrue, setIsTrue] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

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
  const handleAnswers = (event) => {
    event.preventDefault()
    setAnswer(event.target.value)
  }

  const handleAnswered = () => {
    setIsAnswered(true)
    if(answer === question.answer) {
      setIsTrue(true)
    }
  }

  return (
    <>
      <p>Вопросы:</p>

      {question&&
      <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <input value={answer} onChange={handleAnswers} className="form-control" placeholder="введите ответ" autoFocus />
        {isAnswered ? 
         (isTrue ? (<a href={`http://localhost:5173/questions/${+question_id + 1}`} style={{ backgroundColor: 'green' }} className="btn btn-danger">Правильно!</a>) 
          : (<a href={`http://localhost:5173/questions/${+question_id + 1}`} style={{ backgroundColor:'red' }} className="btn btn-danger">Не правильно!</a>)) 
          : (<button onClick={ handleAnswered } style={{ backgroundColor:'green' }} className="btn btn-danger">Ответить</button>)}
        
      </div>
    </div>}
    </>
  );
}

export default LoadQuestions;
