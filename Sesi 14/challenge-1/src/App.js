import React, {useEffect} from 'react'
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header';
import Users from './component/Users';
import Footer from './component/Footer';

function Home(){
  return(
    <>
      <Header/>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">why do we need test ?</h1>
          <p className="col-md-8 fs-4">To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself</p>
          <Link to="/users" className="btn btn-primary btn-lg" role="button">Users List</Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}

function App() {
  useEffect(() => {
    document.title = `Challenge Testing, Debugging, and Deployment`
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  )
}

export default App;
