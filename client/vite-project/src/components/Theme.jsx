
function Theme({cardProps,setTheme}){
console.log(cardProps);


return (
<>
<div className="card mb-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{cardProps.theme}</h5>
                <button  className="btn btn-danger">Выбрать</button>
            </div>
        </div>
    
</>
)


}


export default Theme