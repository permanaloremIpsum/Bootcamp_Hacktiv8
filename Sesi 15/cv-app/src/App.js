import 'bootstrap'; // import js
import 'bootstrap/dist/css/bootstrap.min.css' // import css
import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Sidebar from './component/Sidebar';
import About from './component/About';
import Experience from './component/Experience';
import Education from './component/Education';
import Skill from './component/Skill';
import Interest from './component/Interest';
import Awards from './component/Awards';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <Sidebar/>
        </Router>
        <div className="col-9 bg-light p-5" id="main">
            <About/>
            <Experience/>
            <Education/>
            <Skill/>
            <Interest/>
            <Awards/>
        </div>
      </div>
    </div>
  );
}

export default App;
