import 'bootstrap'; // import js
import 'bootstrap/dist/css/bootstrap.min.css' // import css
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Todos from './component/Todos';
import Login from './component/Login';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/todos">
            <Todos/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
