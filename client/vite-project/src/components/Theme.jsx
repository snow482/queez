function Theme({ cardProps, setTheme }) {



async function fetchQuest() {

const response = await fetch(`/api/themes/${cardProps.id}`)

  }

  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{cardProps.theme}</h5>
          <button onClick={fetchQuest} className="btn btn-danger">Выбрать</button>
        </div>
      </div>
    </>
  );
}

export default Theme;
