import 'bootstrap'; // import js
import 'bootstrap/dist/css/bootstrap.min.css' // import css


function Header() {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">Features</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">About</a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">Login</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-item-center mb-3 mb-lg-9 me-lg-auto text-dark text-decoration-none">
            <span className="fs-4">My First React App</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input type="search" className="form-control" placeholder="Search..."/>
          </form>
        </div>
      </header>
    </>
  )
}

function Content() {
  return (
    <>
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous version of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Click here to show Modal box
        </button>
      </div>
    </div>

    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            This is my first modal box
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="text-muted py-5 border-top">
      <div className="container">
        <p className="mb-1">This is My First React app in Bootstrap</p>
        <p className="mb-0">New to React? <a href="https://reactjs.org/">Visit the homepage</a></p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="container">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
