import { useSelector, useDispatch } from 'react-redux'

function Progress(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleProgress = (idx) => {
    dispatch({
      type: "SET_EVALUATION",
      payload: idx
    })
  }

  return(
    <div className="col-md-3">
      <div className="box-task">
        <div className="box-title bg-progress">
          In Progress
        </div>
        {
          state.progress.length >= 1 ? 
          state.progress.map((task, idx) => (
            <div className="card-task" key={idx}>
              <p className="card-title">{task}</p>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleProgress(e.target.value)}>Evaluate</button>
            </div>
          )) : <></>
        }
      </div>
    </div>
  )
}

export default Progress