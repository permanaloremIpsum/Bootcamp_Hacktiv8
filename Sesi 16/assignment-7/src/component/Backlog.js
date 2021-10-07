import { useSelector, useDispatch } from 'react-redux'

function Backlog(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleTake = (idx) => {
    dispatch({
      type: "SET_PROGRESS",
      payload: idx
    })
  }

  return(
    <div className="col-md-3">
      <div className="box-task">
        <div className="box-title">
          Backlog
        </div>
        {
          state.backlog.length >= 1 ? 
          state.backlog.map((task, idx) => (
            <div className="card-task" key={idx}>
              <p className="card-title">{task}</p>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleTake(e.target.value)}>Take</button>
            </div>
          )) : <></>
        }
      </div>
    </div>
  )
}

export default Backlog