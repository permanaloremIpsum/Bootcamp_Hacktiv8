import { useSelector } from 'react-redux'

function Done(){
  const state = useSelector((state) => state)

  return(
    <div className="col-md-3">
      <div className="box-task">
        <div className="box-title bg-done">
          Done
        </div>
        {
          state.done.length >= 1 ? 
          state.done.map((task, idx) => (
            <div className="card-task" key={idx}>
              <p className="card-title">{task}</p>
            </div>
          )) : <></>
        }
      </div>
    </div>
  )
}

export default Done