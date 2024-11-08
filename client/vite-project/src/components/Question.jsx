import { Link } from "react-router-dom";

function Questions({ questProps, setQuestion }) {
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{questProps.question}</h5>
        </div>
      </div>
    </>
  );
}

export default Questions;
