import { useSelector, useDispatch } from 'react-redux'

function Evaluation(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleEvaluation = (idx) => {
    dispatch({
      type: "SET_DONE",
      payload: idx
    })
  }

  return(
    <div className="col-md-3">
      <div className="box-task">
        <div className="box-title bg-eval">
          Evaluation
        </div>
        {
          state.evaluation.length >= 1 ? 
          state.evaluation.map((task, idx) => (
            <div className="card-task" key={idx}>
              <p className="card-title">{task}</p>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleEvaluation(e.target.value)}>Done</button>
            </div>
          )) : <></>
        }
      </div>
    </div>
  )
}

export default Evaluation