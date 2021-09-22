import React, { useEffect } from 'react';
import './App.css'
import M from 'materialize-css'; // import js
import "materialize-css/dist/css/materialize.min.css"; // import css

function Header(){
  return(
    <>
      <nav className="teal lighten-2 z-depth-2">
        <div className="nav-wrapper container">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Features<i className="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">About</a></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Login</a></li>
            <li><a href="/">Sign up</a></li>
          </ul>
        </div>
      </nav>

      {/* Dropdown Structure */}
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">Feature 1</a></li>
        <li><a href="#!">Feature 2</a></li>
        <li className="divider"></li>
        <li><a href="#!">Feature 3</a></li>
      </ul>

      {/* Mobile Navbar */}
      <ul className="sidenav" id="mobile-demo">
          <li><a href="/">Home</a></li>
          <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Features<i className="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/">Sign up</a></li>
      </ul>

      {/* Dropdown Structure */}
      <ul id="dropdown2" className="dropdown-content">
        <li><a href="#!">Feature 1</a></li>
        <li><a href="#!">Feature 2</a></li>
        <li className="divider"></li>
        <li><a href="#!">Feature 3</a></li>
      </ul>

      <div className="container">
        <header className="row vertical-align" style={{margin: "10px auto"}}>
        <div className="col s6">
          <a href="/">
            <h5 className="blue-grey-text text-darken-2" style={{marginTop: "25px"}}>My First React App</h5>
          </a>
        </div>
        <div className="col s6">
          <form>
            <div className="row">
              <div className="right input-field col s12 m6">
                <i className="material-icons prefix">search</i>
                <input id="icon_search" type="tel" className="validate"/>
                <label htmlFor="icon_search">Search...</label>
              </div>
            </div>
          </form>
        </div>
      </header>
      </div>
    </>
  )
}

function Content(){
  return(
    <div className="container">
      {/* Jumbotron */}
      <div className="row">
        <div className=" col m12">
          <div className="card grey lighten-3">
            <div className="card-content ">
              <span className="card-title"><h1>First Paragraph in Jumbotron</h1></span>
              <p>Using a series of utilities, you can create this  jumbotron, just like the one in previous versions in Materialize. Check out the examples below for how you can remix and restyle it to our liking</p>        
              <a className="waves-effect waves-light btn modal-trigger" href="#modal1"  style={{textTransform: "capitalize", marginTop:"30px"}}>Click here to show Modal box</a>
              </div>
          </div>
        </div>
      </div>
      <div id="modal1" className="modal">
        <div className="modal-content white-text" style={{backgroundColor: "#009688"}}>
          <h4>Modal Header</h4>
        </div>
        <div className="modal-content">
          <p>This is my first modal box</p>
        </div>
        <div className="modal-footer" >  
        <a href="#!" className="modal-action modal-close btn teal lighten-1" style={{margin:"auto 5px"}}>Close</a>
        <a href="#!" className="modal-action modal-close btn teal darken-1" style={{margin:"auto 5px"}}>Save Change</a>
        </div>
      </div>

      {/* Product */}
      <div className="row">
        <div className="col s12 m12 center" style={{marginBottom: "-10px"}}>
          <h4>Our Products <span style={{fontSize: "1.2rem"}}>Made with love</span></h4>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3">
          <div className="card card-product">
            <div className="card-image">
              <img className="responsive-img" src="https://ucarecdn.com/f82be8f5-d517-4642-8fe1-8987b4e530d0/-/stretch/off/-/resize/760x/" alt="cardImage"/>
              <span className="card-title">Product 1</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card card-product">
            <div className="card-image">
              <img className="responsive-img" src="https://ucarecdn.com/42dc8c54-2315-453f-9b40-07e332b8ee39/-/stretch/off/-/resize/760x/" alt="cardImage"/>
              <span className="card-title">Product 2</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card card-product">
            <div className="card-image">
              <img className="responsive-img" src="https://ucarecdn.com/23b818d0-07c3-40de-a070-c999c1323ff3/-/stretch/off/-/resize/760x/" alt="cardImage"/>
              <span className="card-title">Product 3</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card card-product">
            <div className="card-image">
              <img className="responsive-img" src="https://ucarecdn.com/3ed25902-4a51-4628-a057-1e55fbca7856/-/stretch/off/-/resize/760x/" alt="cardImage"/>
              <span className="card-title">Product 4</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col s12 m12 center" style={{marginBottom: "-10px"}}>
        <a className="waves-effect waves-light btn-large red darken-1" href="#!" style={{marginBottom: "20px"}}>Explore More...</a>
      </div>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">This is My First React App in Materialize</h5>         
            <p className="grey-text text-lighten-4">New to React?<a href="https://reactjs.org/"> Visit the homepage</a></p>   
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">TIM 5</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Dede Permana</a></li>  
              <li><a className="grey-text text-lighten-3" href="#!">Vera</a></li>                          
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        Challange Tugas Sesi 13 
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(()=> {
    document.title = "Explore Materialize CSS"
    
    M.AutoInit()
  })
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
