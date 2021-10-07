import 'bootstrap'; // import js
import 'bootstrap/dist/css/bootstrap.min.css' // import css
import './App.css';
import { useEffect } from 'react'
import Form from './component/Form';
import Backlog from './component/Backlog';
import Progress from './component/Progress';
import Evaluation from './component/Evaluation';
import Done from './component/Done';

function App() {
  useEffect(() => {
    document.title = `Kanban Board`
  })
  
  return (
    <div className="container-fluid">
      <div className="row my-4">
        <Form/>
        <Backlog/>
        <Progress/>
        <Evaluation/>
        <Done/>
      </div>
    </div>
  );
}

export default App;
