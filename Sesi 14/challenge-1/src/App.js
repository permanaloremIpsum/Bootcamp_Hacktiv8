import React, {useEffect} from 'react'
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Users from './component/Users';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    document.title = `Challenge Testing, Debugging, and Deployment`
  })
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/" component={Home} />          
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
