import { useDispatch } from 'react-redux'

function Form(){
  const dispatch = useDispatch()

  const addTask = () => {
    let taskValue = document.getElementById('task')
    if(taskValue.value === ''){
      alert("Masukkan Nama Tugas")
      taskValue.focus()
    }else{
      dispatch({
        type: "ADD_TASK",
        payload: taskValue.value
      })
    }
    taskValue.value = ''
  }

  return(
      <div className="col-md-12 mb-4">
        <h1>Kanban Board</h1>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="New Task" id="task"/>
              <button className="btn btn-primary" type="button" id="btn-task" onClick={addTask} >Save Record</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Form