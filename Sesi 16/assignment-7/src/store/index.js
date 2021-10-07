import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    backlog: [],
    progress: [],
    evaluation: [],
    done: []
}

const doTask = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TASK":
            state.backlog.push(action.payload)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "SET_PROGRESS":
            let tempProgress = state.backlog[action.payload]
            state.backlog.splice(action.payload, 1)
            state.progress.push(tempProgress)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "SET_EVALUATION":
            let tempEval = state.progress[action.payload]
            state.progress.splice(action.payload, 1)
            state.evaluation.push(tempEval)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "SET_DONE":
            let tempDone = state.evaluation[action.payload]
            state.evaluation.splice(action.payload, 1)
            state.done.push(tempDone)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        default:
            return state
    }
}

const store = createStore(doTask, applyMiddleware(thunk))

export default store